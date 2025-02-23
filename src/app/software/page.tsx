export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-center text-2xl font-semibold tracking-tighter">
        Open source Software
      </h1>
      <p>
        <a href="https://gencounter.software.damoncroberts.io">
          <u>genCountR</u>
        </a>
        : Allows users to generate a gendered language score according to the
        gendered language dictionary in Roberts and Utych (2019){" "}
        <a href="https://doi.org/10.1177%2F1065912919874883">
          doi:10.1177/1065912919874883.
        </a>
      </p>
      <br></br>
      <p>
        <a href="https://github.com/DamonCharlesRoberts/fancy-doc">
          <u>fancy-doc</u>
        </a>
        : A Quarto extension to generate a PDF document using the fancyhdr LaTeX
        package.
      </p>
      <br></br>
      <p>
        <a href="https://github.com/DamonCharlesRoberts/ScrapeCongress">
          <u>ScrapeCongress - DEPRECIATED</u>
        </a>
        : An R package to scrape the tweets of current and past members of
        Congress.
      </p>
    </section>
  );
}
