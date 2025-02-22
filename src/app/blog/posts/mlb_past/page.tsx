"use client";

import { useState, useEffect } from "react";
import React from 'react';
import MathJax from "react-mathjax";

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
        do not force us to deliberate on a committee. Instead, we can estimate each
        team's latent (latent meaning that we cannot directly measure it easily
        since not every team plays against one another) ability based on who they win
        against and who they lose against.
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(1), transition: "opacity 0.2s ease-out" }}
      >
        A class of statistical models allow us to do just that: Paired comparisons.
        A specific form of these models is called the Bradley Terry model.
      </p>
      <br></br>
      <MathJax.Provider>
        <MathJax.Node formula={'y_i = logit^{-1}(\\alpha_{a}-\\alpha_{h})'} />
      </MathJax.Provider>
      <br></br>
      <p
        style={{ opacity: getOpacity(1), transition: "opacity 0.2s ease-out" }}
      >
        <MathJax.Provider>
          <span>
            Where <MathJax.Node inline formula={'y_i '}/> is equal to 0 if the
            home team won and 1 if the away team
            won. <MathJax.Node inline formula={' \\alpha_a '}/> is a paramater
            for the estimated latent ability of the away team
            while <MathJax.Node inline formula={' \\alpha_h '}/> is a parameter
            for the estimated latent ability of the home team. I then sort
            the estimated <MathJax.Node inline formula={'\\alpha'}/> parameter 
            in descending order to get estimated rank for each team.
          </span>
        </MathJax.Provider>
      </p>
      <br></br>
      <div>
        <button onClick={() => toggleCollapse(1)}>
          {isOpen1 ? 'Hide Code' : 'Show STAN code for BT'}
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
      <MathJax.Provider>
        <MathJax.Node formula={'y_i = logit^{-1}(\\alpha_{a}-\\alpha_{h} + \\gamma)'} />
      </MathJax.Provider>
      <br></br>
      <div>
        <button onClick={() => toggleCollapse(2)}>
          {isOpen2 ? 'Hide Code' : 'Show STAN code for Home adv.'}
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
        <MathJax.Provider><span>
          Finally, I run an extension of the Bradley-Terry model which is referred
          to as the Davidson model which allows for ties and an ordered set of
          outcomes. That is, rather than simply predicting whether or not a team
          won or not, now my model is supposed to predict the magnitude of the win.
          That is, in this final model, <MathJax.Node inline formula={'y_i '}/> is
          equal to 1 if the home team won by 5 or more runs, 2 if the home team
          won by between 2 and 4 runs, 3 if the home team won by 1 run, 4 if
          the home and away team tied, 5 if the away team won by 1 run, 6 if
          the away team won by between 2 and 4 runs, and 7 if the away team
          won by 5 or more runs. One issue with this model, is that ties are not
          common at all due to the allowance for extra innings. This gives my
          ordered logistic regression some problems due to how rare those events
          are relative to the other possible outcomes.
        </span></MathJax.Provider>
      </p>
      <br></br>
      <MathJax.Provider>
        <MathJax.Node formula={'y_i = ordered\\_logit^{-1}(\\alpha_{a}-\\alpha_{h} + \\gamma)'} />
      </MathJax.Provider>
      <br></br>
      <div>
        <button onClick={() => toggleCollapse(3)}>
          {isOpen3 ? 'Hide Code' : 'Show STAN code for Davidson'}
        </button>
        {isOpen3 && (
          <pre>
            <code>{mod3}</code>
          </pre>
        )}
      </div>
      <br></br>
    </section>
  );
}
