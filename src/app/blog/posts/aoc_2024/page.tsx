"use client";

import { useState, useEffect } from "react";

export default function Post() {
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
  const getOpacity = (index: number) => {
    // Adjusts opacity for each paragraph based on scroll position
    const opacity = Math.min(1, Math.max(0.3, (scrollY - index * 50) / 100));
    return opacity;
  };
  return (
    <section>
      <h1 className="mb-8 text-center text-2xl font-semibold tracking-tighter">
        Advent of Code 2024
      </h1>
      <p>
        Over the past few years I have participated in Advent of Code. If you
        are not familiar with it, it is a yearly challenge with daily coding and
        logic puzzles that are Christmas themed. The puzzles have two parts and
        some compete for a global leaderboard. Those who are in the first 100 in
        a given day to solve both parts earn points on the leaderboard. The
        number of points that you earn depend on your position which is based on
        who solves the two parts first.
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(0), transition: "opacity 0.2s ease-out" }}
      >
        I never compete in AOC. I use it as a way to challenge my knowledge of
        some computer science concepts like Data Structures and Algorithms, to
        learn more about a particular coding language&apos;s features, and to
        try out coding exercises that often do not come up in my day-to-day
        work.
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(1), transition: "opacity 0.2s ease-out" }}
      >
        My experince, like others in previous years, has been pretty positive so
        far; as of last updating this post we are only a week in. It does seem
        like LLM-assisted solutions is a problem and has a few on the
        r/adventofcode subreddit pretty upset. But since I don&apos;t try to
        compete for the leaderboard, I don&apos;t have much stake in what other
        people are doing.
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(2), transition: "opacity 0.2s ease-out" }}
      >
        I will say that one major impedement that often comes up is how burnt
        out I get -- since there are daily puzzles, it is relentless. If I have
        a day that takes me a long time to solve a puzzle, it is pretty
        exhausting to know that in a few hours, there will be another, harder,
        puzzle that awaits. That is why my goal for this year is to be OK with
        solving the puzzles into next year and not force myself to keep up if I
        have a few days where I just don&apos;t feel like staring at my
        terminal. After all, that is what I do for work and so sometimes it is
        just a bit too much to go home and do more of that.
      </p>
      <br></br>
      <p
        style={{ opacity: getOpacity(3), transition: "opacity 0.2s ease-out" }}
      >
        If you are interested in Advent Of Code, are preparing for interviews in
        the tech industry, are a grad student (like I was when I first started
        doing these) who want to learn some coding or CS, or just like to solve
        puzzles, I highly recommend participating! It is a lot of fun!
      </p>
      <br></br>
      Here are my current solutions:
      <ul>
        <li
          style={{
            opacity: getOpacity(4),
            transition: "opacity 0.2s ease-out",
          }}
        >
          <a href="https://github.com/DamonCharlesRoberts/advent_2024/blob/main/src/day_1.py">
            - Day 1
          </a>
        </li>
        <li
          style={{
            opacity: getOpacity(5),
            transition: "opacity 0.2s ease-out",
          }}
        >
          <a href="https://github.com/DamonCharlesRoberts/advent_2024/blob/main/src/day_2.py">
            - Day 2
          </a>
        </li>
        <li
          style={{
            opacity: getOpacity(6),
            transition: "opacity 0.2s ease-out",
          }}
        >
          <a href="https://github.com/DamonCharlesRoberts/advent_2024/blob/main/src/day_3.py">
            - Day 3
          </a>
        </li>
        <li
          style={{
            opacity: getOpacity(7),
            transition: "opacity 0.2s ease-out",
          }}
        >
          <a href="https://github.com/DamonCharlesRoberts/advent_2024/blob/main/src/day_4.py">
            - Day 4
          </a>
        </li>
        <li
          style={{
            opacity: getOpacity(8),
            transition: "opacity 0.2s ease-out",
          }}
        >
          <a href="https://github.com/DamonCharlesRoberts/advent_2024/blob/main/src/day_5.py">
            - Day 5
          </a>
        </li>
      </ul>
    </section>
  );
}
