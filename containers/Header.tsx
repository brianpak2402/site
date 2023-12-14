import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">
          <a href="/">Brian Pak</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-200 sm:text-xl">
          Aspiring Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal xl:text-lg">
          I build cool stuff for enterprise Fintech and Music Technology on the
          cloud.
        </p>
      </div>
      <ul
        aria-label="social-media"
        className="ml-1 mt-8 flex items-center"
      >
        <li className="mr-5 text-xs">
          <a
            className="block transition-all hover:text-purple-400"
            href="https://github.com/brianpak2402"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block transition-all hover:text-purple-400"
            href="https://linkedin.com/in/brianpakk"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  );
}
