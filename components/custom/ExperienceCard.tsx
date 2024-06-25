import type { AnimatedLinkColorVariant } from "./AnimatedLink";
import AnimatedLink from "./AnimatedLink";
import Tag from "./Tag";

export default function ExperienceCard({
  title,
  role,
  dates,
  description,
  relatedLinks = [],
  technologies,
  hoverColor = undefined,
  url,
}: {
  dates: string;
  description: string;
  hoverColor?: AnimatedLinkColorVariant;
  relatedLinks?: { href: string; name: string }[];
  role: string;
  technologies: string[];
  title: string;
  url: string;
}) {
  return (
    <div className="bg-white rounded-md p-3 relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <span
        aria-label={dates}
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
      >
        {dates}
      </span>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <AnimatedLink
            arrowDirection="up"
            hoverColor={hoverColor}
            href={url}
            text={title}
          />
          <div>
            <div className="text-slate-500">{role}</div>
          </div>
        </h3>
        <p className="mt-2 text-sm text-black leading-normal">{description}</p>
        <ul className="mt-2 flex flex-wrap">
          {relatedLinks.map(relatedLink => (
            <li
              key={relatedLink.name}
              className="mr-4"
            >
              <a
                className="relative mt-2 inline-flex items-center text-sm font-medium transition-all text-black hover:text-purple-500 focus-visible:text-purple-500"
                href={relatedLink.href}
              >
                <svg
                  aria-hidden="true"
                  className="mr-1 h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                  <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                </svg>
                <span>{relatedLink.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <ul className="mt-2 flex flex-wrap">
          {technologies.map(tech => (
            <li
              key={tech}
              className="mr-1.5 mt-2"
            >
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
