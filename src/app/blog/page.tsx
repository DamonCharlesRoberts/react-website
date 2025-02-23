export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-center text-2xl font-semibold tracking-tighter">
        Blog
      </h1>
      <p>
        <a href="/blog/posts/mlb_past">
          <u>2025-02-22:</u>
        </a>{" "}
        A set of Bayesian paired comparisons models to power rank MLB teams.
      </p>
      <p>
        <a href="/blog/posts/aoc_2024">
          <u>2024-12-08:</u>
        </a>{" "}
        My Advent of Code 2024 solutions and experience.
      </p>
    </section>
  );
}
