import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";
function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/DamonCharlesRoberts/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/DamonCharlesRoberts/react-website"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">view source</p>
          </a>
        </li>
      </ul>
      <p className="footer-text mt-8 text-neutral-600 dark:text-neutral-300">
        <span>
          <FontAwesomeIcon
            icon={faCreativeCommons}
            style={{ height: "20px" }}
          />
        </span>
        2021 - {new Date().getFullYear()} Damon Charles Roberts
      </p>
      <p>
        All content licensed under{""}
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          target="_blank"
        >
          Creative Commons CC BY-NC 4.0
        </a>
      </p>
    </footer>
  );
}