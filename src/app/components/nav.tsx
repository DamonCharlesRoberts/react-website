import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "https://blog.damoncroberts.io": {
    name: "blog",
  },
  "/research": {
    name: "research",
  },
  "/software": {
    name: "software",
  },
};

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-start space-x-4 py-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 hover:underline"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
