"use client"; // Add this line to ensure the component is client-side
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons/faNewspaper";

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
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
  const getOpacity = (index) => {
    // Adjusts opacity for each paragraph based on scroll position
    const opacity = Math.min(1, Math.max(0, (scrollY - index * 50) / 100));
    return opacity;
  };

  return (
    <section>
      <h2 className="font-semibold text-lg mb-8 tracking-tighter">Published</h2>
      <p
        style={{ opacity: getOpacity(0), transition: "opacity 0.1s ease-out" }}
      >
        Roberts, Damon C. and Jennifer Wolak. 2022. "Do Voters Care about the
        Age of their Elected Representatives?" <i>Political Behavior</i>. DOI:{" "}
        <a href="https://doi.org/10.1007/s11109-022-09802-5">
          10.1007/s11109-022-09802-5
        </a>
        .
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          opacity: getOpacity(0),
          transition: "opacity 0.1s ease-out",
        }}
      >
        <a href="https://doi.org/10.1007/s11109-022-09802-5" target="_blank">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
        <a
          href="https://static-content.springer.com/esm/art%3A10.1007%2Fs11109-022-09802-5/MediaObjects/11109_2022_9802_MO ESM1_ESM.docx"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFileCode}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
      </div>
      <br></br>
      <p
        style={{ opacity: getOpacity(1), transition: "opacity 0.1s ease-out" }}
      >
        Fahey, James J. and Damon C. Roberts and Stephen M. Utych. 2022.
        "Principled or Partisan? The Effect of Cancel Culture Framings on
        Support for Free Speech." <i>American Politics Research</i>. DOI:{" "}
        <a href="https://doi.org/10.1177/1532673X22108760">
          10.1177/1532673X22108760
        </a>
        .
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          opacity: getOpacity(1),
          transition: "opacity 0.1s ease-out",
        }}
      >
        <a href="https://doi.org/10.1177/1532673X22108760" target="_blank">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
        <a
          href="https://journals.sagepub.com/doi/suppl/10.1177/1532673X221087601/suppl_file/sj-pdf-1-apr-10.1177_1532673X221087601.pdf"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFileCode}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
      </div>
      <br></br>
      <p
        style={{ opacity: getOpacity(2), transition: "opacity 0.1s ease-out" }}
      >
        Roberts, Damon C. and Stephen M. Utych. 2022. "A Delicate Hand, or Two
        Fisted Aggression? How Gendered Language Influences Candidate
        Perceptions." <i>American Politics Research</i>. DOI:{" "}
        <a href="https://doi.org/10.1177/1532673X211064884">
          10.1177/1532673X211064884
        </a>
        .
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          opacity: getOpacity(2),
          transition: "opacity 0.1s ease-out",
        }}
      >
        <a href="https://doi.org/10.1177/1532673X211064884" target="_blank">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
        <a href="https://doi.org/10.1177/1532673X211064884" target="_blank">
          <FontAwesomeIcon
            icon={faFileCode}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
      </div>
      <br></br>
      <p
        style={{ opacity: getOpacity(3), transition: "opacity 0.1s ease-out" }}
      >
        Roberts, Damon C. and Stephen M. Utych. 2021. "Polarized social
        distancing: Residents of Republican‐majority counties spend more time
        away from home during the COVID‐19 crisis."{" "}
        <i>Social Science Quarterly</i>. DOI:10.1111/ssqu.13101
        <a href="https://doi.org/10.1111/ssqu.13101">10.1111/ssqu.13101</a>.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          opacity: getOpacity(3),
          transition: "opacity 0.1s ease-out",
        }}
      >
        <a href="https://doi.org/10.1111/ssqu.13101" target="_blank">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
        <a
          href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ssqu.13101"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFileCode}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
      </div>
      <br></br>
      <p
        style={{ opacity: getOpacity(4), transition: "opacity 0.1s ease-out" }}
      >
        Roberts, Damon C. and Stephen M. Utych. 2020. "Linking Gender, Language,
        and Partisanship: Developing a Database of Masculine and Feminine
        Words." <i>Political Research Quarterly</i>. DOI:
        <a href="https://doi.org/10.1177/106591291987488">
          10.1177/106591291987488
        </a>
        .
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          opacity: getOpacity(4),
          transition: "opacity 0.1s ease-out",
        }}
      >
        <a href="https://doi.org/10.1177/106591291987488" target="_blank">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
        <a
          href="https://journals.sagepub.com/doi/suppl/10.1177/1065912919874883/suppl_file/Appendix.7z"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFileCode}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
        <a
          href="https://journals.sagepub.com/doi/suppl/10.1177/1065912919874883/suppl_file/Appendix_-_Word_Rating_File.xlsx"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFileCode}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
      </div>
      <br></br>
      <h2
        className="font-semibold text-lg mb-8 tracking-tighter"
        style={{ opacity: getOpacity(4), transition: "opacity 0.1s ease-out" }}
      >
        Working projects
      </h2>
      <h3
        className="font-semibold tracking-tighter"
        style={{ opacity: getOpacity(4), transition: "opacity 0.1s eas-out" }}
      >
        Books
      </h3>
      <p
        style={{ opacity: getOpacity(5), transition: "opacity 0.1s ease-out" }}
      >
        Roberts, Damon C. 2024. "The shape and color of politics: "How Citizens
        Process Political Information and Its Consequences."{" "}
        <a href="https://www.proquest.com/openview/f033d74459b839bd1ddc8503e60ced60/1?pq-origsite=gscholar&cbl=18750&diss=y">
          PhD diss., University of Colorado at Boulder.
        </a>
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          opacity: getOpacity(5),
          transition: "opacity 0.1s ease-out",
        }}
      >
        <a
          href="https://www.proquest.com/openview/f033d74459b839bd1ddc8503e60ced60/1?pq-origsite=gscholar&cbl=18750&diss=y"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
      </div>
      <br></br>
      <h3
        className="font-semibold tracking-tighter"
        style={{
          opacity: getOpacity(5),
          transition: "opacity 0.1s ease-out",
        }}
      >
        Working papers
      </h3>
      <p
        style={{ opacity: getOpacity(6), transition: "opacity 0.1s ease-out" }}
      >
        Roberts, Damon C. "Economic concerns appear to be weak predictors of
        white political identity." <i>Working Paper</i>
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          opacity: getOpacity(6),
          transition: "opacity 0.1s ease-out",
        }}
      >
        <a
          href="https://github.com/DamonCharlesRoberts/white_identity_sources/blob/main/out/manuscript.pdf"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
        <a
          href="https://github.com/DamonCharlesRoberts/white_identity_sources"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFileCode}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
      </div>
      <br></br>
      <p
        style={{ opacity: getOpacity(7), transition: "opacity 0.1s ease-out" }}
      >
        Roberts, Damon C. "Giving the leaves back to the forest: A primer on the
        use of random forest models as chained equations for imputing missing
        data." <i>Working Paper</i>
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          opacity: getOpacity(7),
          transition: "opacity 0.1s ease-out",
        }}
      >
        <a
          href="https://github.com/DamonCharlesRoberts/mice-imputation-psci/blob/main/drafts/dcr_rf_imputation_draft_spring_2023.pdf"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
        <a
          href="https://github.com/DamonCharlesRoberts/mice-imputation-psci"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFileCode}
            style={{ height: "30px", paddingLeft: "1em" }}
          />
        </a>
      </div>
      <br></br>
      <h2
        className="font-semibold text-lg mb-8 tracking-tighter"
        style={{ opacity: getOpacity(7), transition: "opacity 0.1s ease-out" }}
      >
        Public Scholarship
      </h2>
      <h3
        className="font-semibold tracking-tighter"
        style={{ opacity: getOpacity(7), transition: "opacity 0.1s ease-out" }}
      >
        Articles
      </h3>
      <p
        style={{ opacity: getOpacity(8), transition: "opacity 0.1s ease-out" }}
      >
        Roberts, Damon C. and Jennifer Wolak. 2022. "Will Biden's age keep him
        from being re-elected?" <i>Washington Post</i>.
      </p>
      <a href="https://www.washingtonpost.com/politics/2022/07/21/biden-trump-president-age-2024-election/">
        <FontAwesomeIcon
          icon={faNewspaper}
          style={{
            height: "30px",
            paddingLeft: "1em",
            opacity: getOpacity(8),
            transition: "opacity 0.1s ease-out",
          }}
        />
      </a>
      <br></br>
      <h3
        className="font-semibold tracking-tighter"
        style={{ opacity: getOpacity(8), transition: "opacity 0.1s ease-out" }}
      >
        Interviews
      </h3>
      <p
        style={{ opacity: getOpacity(9), transition: "opacity 0.1s ease-out" }}
      >
        <i>E.W. Scripps Media</i> On: Why young candidates have a hard time
        attaining office.
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(10), transition: "opacity 0.1s ease-out" }}
      >
        <i>National Public Radio</i>
        <a href="https://www.npr.org/2023/07/31/1190675707/mcconnell-feinstein-medical-episodes-maximum-age-limits">
          After McConnell's and Feinstein's episodes, should age limits be on
          the table?"
        </a>
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(11), transition: "opacity 0.1s ease-out" }}
      >
        <i>New York Times</i>{" "}
        <a href="https://t.co/kbAAvAjwUw">
          How much do voters really care about Biden's age?"
        </a>
        .
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(12), transition: "opacity 0.1s ease-out" }}
      >
        <i>Colorado Public Radio</i>. On: The effects of candidate age on
        electability. August 31, 2022.
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(13), transition: "opacity 0.1s ease-out" }}
      >
        <i>University of Colorado Boulder press</i> On: Joe Biden's re-election
        announcement and his age. May 2023.
      </p>
    </section>
  );
}
