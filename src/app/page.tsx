export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-center text-2xl font-semibold tracking-tighter font-[family-name:var(--font-geist-mono)]">
        Damon C. Roberts
      </h1>
      <p className="mb-4 text-center font-[family-name:var(--font-geist-mono)]">
        {`I project outcomes by fitting Bayesian models on data, build web applications, and engineer data pipelines.`}
      </p>
      <p className="mb-4 text-center font-[family-name:var(--font-geist-mono)]">
        {
          "My academic research is featured in a number of peer-reviewed academic journals such as Political Behavior, Political Research Quarterly, Social Science Quarterly, and American Politics Research. My public-facing work has also been featured in The Washington Post’s Monkey Cage Blog (now Good Authority)."
        }
      </p>
      <div className="my-8"></div>
    </section>
  );
}
