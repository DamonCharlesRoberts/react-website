"use client";

import { useState, useEffect } from "react";
import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Post() {
  const [scrollY, setScrollY] = useState(0);
  // States for storing the fetched code from multiple scripts
  const [mod1, setMod1] = useState("");
  const [mod2, setMod2] = useState("");
  const [mod3, setMod3] = useState("");
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  // Fetch code for script 1 when the button is clicked
  useEffect(() => {
    if (isOpen1) {
      fetch("https://raw.githubusercontent.com/DamonCharlesRoberts/mlb_pred/refs/heads/main/mlbpred/btl.stan")
        .then((response) => response.text())
        .then((data) => setMod1(data))
        .catch((error) => console.error("Error fetching simple BTL code:", error));
    }
  }, [isOpen1]);
  // Fetch code for script 2 when the button is clicked
  useEffect(() => {
    if (isOpen2) {
      fetch("https://raw.githubusercontent.com/DamonCharlesRoberts/mlb_pred/refs/heads/main/mlbpred/btl_home.stan")
        .then((response) => response.text())
        .then((data) => setMod2(data))
        .catch((error) => console.error("Error fetching Home adv. code:", error));
    }
  }, [isOpen2]);
  // Fetch code for script 3 when the button is clicked
  useEffect(() => {
    if (isOpen3) {
      fetch("https://raw.githubusercontent.com/DamonCharlesRoberts/mlb_pred/refs/heads/main/mlbpred/btl_mag.stan")
        .then((response) => response.text())
        .then((data) => setMod3(data))
        .catch((error) => console.error("Error fetching Davidson code:", error));
    }
  }, [isOpen3]);
  // Function to handle scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Function to calculate opacity based on scroll position
  const getOpacity = (index: number) => {
    const opacity = Math.min(1, Math.max(0.3, (scrollY - index * 50) / 100));
    return opacity;
  };
  const toggleCollapse = (scriptIndex: number) => {
    if (scriptIndex === 1) setIsOpen1(!isOpen1);
    if (scriptIndex === 2) setIsOpen2(!isOpen2);
    if (scriptIndex === 3) setIsOpen3(!isOpen3);
  };
  const [seasons, setSeasons] = useState(2019);
  const [model, setModel] = useState("Simple");
  // Function to handle year change
  const handleSeasonChange = (event) => {
    setSeasons(event.target.value);
  };
  // Function to handle model change
  const handleModelChange = (event) => {
    setModel(event.target.value);
  };
  const plotsData = {
    2019: {
      "Simple": "/2019_btl_estimates.html"
      ,"Home-field adv.": "/2019_home_estimates.html"
      ,"Ordered outcome": "/2019_mag_estimates.html"
    },
    2020: {
      "Simple": "/2020_btl_estimates.html"
      ,"Home-field adv.": "/2020_home_estimates.html"
      ,"Ordered outcome": "/2020_mag_estimates.html"
    },
    2021: {
      "Simple": "/2021_btl_estimates.html"
      ,"Home-field adv.": "/2021_home_estimates.html"
      ,"Ordered outcome": "/2021_mag_estimates.html"
    },
    2022: {
      "Simple": "/2022_btl_estimates.html"
      ,"Home-field adv.": "/2022_home_estimates.html"
      ,"Ordered outcome": "/2022_mag_estimates.html"
    },
    2023: {
      "Simple": "/2023_btl_estimates.html"
      ,"Home-field adv.": "/2023_home_estimates.html"
      ,"Ordered outcome": "/2023_mag_estimates.html"
    },
    2024: {
      "Simple": "/2024_btl_estimates.html"
      ,"Home-field adv.": "/2024_home_estimates.html"
      ,"Ordered outcome": "/2024_mag_estimates.html"
    },
  };
  const plot = plotsData[seasons]?.[model];
  return (
    <section>
      <h1 className="mb-8 text-center text-2xl font-semibold tracking-tighter">
        Bayesian Paired Comparisons for power ranking MLB teams (2019-2024)
      </h1>
      <p>
        Baseball is back! Spring training for the 2025 season started just a
        few days ago. Over the course of the off-season, here and there,
        I have been pulling this project together. The goal: power-rank each
        team.
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(0), transition: "opacity 0.2s ease-out" }}
      >
        Standings allow us to rank teams based on who has more wins and fewer
        losses. Not all teams play one another, over the course of a season,
        however. For followers of NCAA football, this is often a source of
        consternation in the build-up to the playoff selection: do teams
        that play and win a lot against weaker opponents deserve to have
        as high of a rank as a team that may have relatively more losses
        but has played against much tougher opponents?
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(1), transition: "opacity 0.2s ease-out" }}
      >
        The task of sorting this out seems relatively complicated at first blush.
        And it kind of is, thankfully we have a class of statistical models that
        do not force us to deliberate in a committee. Instead, we can estimate each
        team&apos;s latent (latent meaning that we cannot directly measure it easily
        since not every team plays against one another) ability based on who they win
        against and who they lose against.
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(1), transition: "opacity 0.2s ease-out" }}
      >
        A class of statistical models allow us to do just that: Paired comparisons.
        One type of these models is called
        the <a href="https://www.jstor.org/stable/2334029?origin=crossref">
          <u>Bradley-Terry model</u>
        </a>.
      </p>
      <br></br>
      <MathJaxContext>
        <MathJax>{"\\(y_i = logit^{-1}(\\alpha_{a}-\\alpha_{h})\\)"}</MathJax>
        <MathJax>{"\\(\\alpha \\sim \\mathcal{N}(0,1)\\)"}</MathJax>
      </MathJaxContext>
      <br></br>
      <p
        style={{ opacity: getOpacity(1), transition: "opacity 0.2s ease-out" }}
      >
        <MathJaxContext>
          <span>
            Where <MathJax inline>{"\\(y_i\\)"}</MathJax> is equal to 0 if the
            home team won and 1 if the away team
            won. <MathJax inline>{" \\(\\alpha_a\\) "}</MathJax> is a paramater
            for the estimated latent ability of the away team
            while <MathJax inline>{" \\(\\alpha_h\\) "}</MathJax> is a parameter
            for the estimated latent ability of the home team. I then sort
            the estimated <MathJax inline>{"\\(\\alpha\\)"}</MathJax> parameter 
            in descending order to get estimated rank for each team.
          </span>
        </MathJaxContext>
      </p>
      <br></br>
      <div>
        <button onClick={() => toggleCollapse(1)}>
          {isOpen1 ? "Hide code ↑" : "Show STAN code ↓"}
        </button>
        {isOpen1 && (
          <pre>
            <code>{mod1}</code>
          </pre>
        )}
      </div>
      <br></br>
      <p
        style={{ opacity: getOpacity(2), transition: "opacity 0.2s ease-out" }}
      >
        I also run a version of the model that accounts for home-field advantage.
        To do this, I simply add an intercept term to the model above. Doing so,
        adjusts the logged-odds for the home team winning which can act as a
        parameter to estimate the home-field advantage.
      </p>
      <br></br>
      <MathJaxContext>
        <MathJax>{"\\(y_i = logit^{-1}(\\alpha_{a}-\\alpha_{h} + \\gamma)\\)"}</MathJax>
        <MathJax>{"\\(\\alpha \\sim \\mathcal{N}(0,1)\\)"}</MathJax>
        <MathJax>{"\\(\\gamma \\sim \\mathcal{N}(0,1)\\)"}</MathJax>
      </MathJaxContext>
      <br></br>
      <div>
        <button onClick={() => toggleCollapse(2)}>
          {isOpen2 ? "Hide code ↑" : "Show STAN code ↓"}
        </button>
        {isOpen2 && (
          <pre>
            <code>{mod2}</code>
          </pre>
        )}
      </div>
      <br></br>
      <p
        style={{ opacity: getOpacity(3), transition: "opacity 0.2s ease-out" }}
      >
        <MathJaxContext><span>
          Finally, I run an extension of the Bradley-Terry model which is sometimes
          referred to as 
          the <a href="https://www.tandfonline.com/doi/abs/10.1080/01621459.1970.10481082">
            <u>Davidson model</u>
          </a> which allows for ties and an ordered set of
          outcomes. That is, rather than simply predicting whether or not a team
          won or not, now my model is supposed to predict the magnitude of the win.
          That is, in this final model, <MathJax inline>{"\\(y_i\\) "}</MathJax> is
          equal to 1 if the home team won by 5 or more runs, 2 if the home team
          won by between 2 and 4 runs, 3 if the home team won by 1 run, 4 if
          the home and away team tied, 5 if the away team won by 1 run, 6 if
          the away team won by between 2 and 4 runs, and 7 if the away team
          won by 5 or more runs. One issue with this model, is that ties are not
          common at all due to the allowance for extra innings. This gives my
          ordered logistic regression some problems due to how rare those events
          are relative to the other possible outcomes.
        </span></MathJaxContext>
      </p>
      <br></br>
      <MathJaxContext>
        <MathJax>{"\\(y_i = ordered\\_logit^{-1}(\\alpha_{a}-\\alpha_{h} + \\gamma)\\)"}</MathJax>
        <MathJax>{"\\(\\alpha \\sim \\mathcal{N}(0,1)\\)"}</MathJax>
        <MathJax>{"\\(\\gamma \\sim \\mathcal{N}(0,1)\\)"}</MathJax>
      </MathJaxContext>
      <br></br>
      <div>
        <button onClick={() => toggleCollapse(3)}>
          {isOpen3 ? "Hide code ↑" : "Show STAN code ↓"}
        </button>
        {isOpen3 && (
          <pre>
            <code>{mod3}</code>
          </pre>
        )}
      </div>
      <br></br>
      <div>
      <br></br>
      <p
        style={{ opacity: getOpacity(4), transition: "opacity 0.2s ease-out" }}
      >
      I pulled the boxscores for the 2019, 2020, 2021, 2022, 2023, and 2024 regular seasons
      from the MLB API. With these data, I fit these three models using 
      <code> cmdstanpy</code>. I fit these models and retain the last 2000 simulations
      (or draws) of the estimated rankings.
      The full repository containing all of this can be found
      on my <a href="https://github.com/DamonCharlesRoberts/mlb_pred">
            <u>GitHub</u>
          </a>.
      </p>
      <p
        style={{ opacity: getOpacity(5), transition: "opacity 0.2s ease-out" }}
      >
      The results of these models are in the plots below. The dot represents
      the median ranking for each team that the model has estimated. The bars
      reflect the range of the model&apos;s uncertainty about the ranking of the
      team. This range reflects that the team&apos;s rank is expected to fall
      within this range 95% of the time.
      </p>
      <br></br>
      <br></br>
      <select 
          value={seasons} onChange={handleSeasonChange}
          style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "200px",
              color: "#ffffff",
              background: "#000000"
            }}
      >
        {Object.keys(plotsData).map((seasonOption) => (
          <option key={seasonOption} value={seasonOption}>
            {seasonOption}
          </option>
        ))}
      </select>
      <select 
          value={model} onChange={handleModelChange}
          style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "200px",
              color: "#ffffff",
              background: "#000000"
            }}
      >
        {Object.keys(plotsData[seasons]).map((modelOption) => (
          <option key={modelOption} value={modelOption}>
            {modelOption}
          </option>
        ))}
      </select>
      </div>
      <div>
        {plot ? (
          <iframe
              src={plot}
              width="150%"
              height="750px"
              title={"Estimated rank"}
          ></iframe>
        ) : (
          <p>Select a valid season and model to see the content.</p>
        )}
      </div>
      <br></br>
      <br></br>
      <p
        style={{ opacity: getOpacity(6), transition: "opacity 0.2s ease-out" }}
      >
      There are a few tweaks I could make to these models:
      </p><br></br>
      <p
        style={{ opacity: getOpacity(7), transition: "opacity 0.2s ease-out" }}
      >
          - Play around with the priors for the parameters a bit more.
          Though from testing, I don&apos;t think they will make too much of a
          difference here.
      </p>
      <p
        style={{ opacity: getOpacity(8), transition: "opacity 0.2s ease-out" }}
      >
          - I could do things like a hierarchical model where I model
          player ability and sum the ability of the players for each
          team. One issue with this approach is that the players for
          each team tends to remain relatively stable over time. While
          pitching may change, the rotation of pitchers tends to remain
          somewhat stable. So, it may be something to try, but my
          <i> a priori</i> expectation is that it won&apos;t help the model
          much.
      </p>
      <p
        style={{ opacity: getOpacity(9), transition: "opacity 0.2s ease-out" }}
      >
          - There may be more that I am not thinking of, but Spring Training
          is underway and I am just too excited to sit on this project too
          much longer!
      </p>
    </section>
  );
}
