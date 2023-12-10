import AnimatedLink from "./AnimatedLink";
import Tag from "./Tag";

export default function ExperienceCard({
  title,
  role,
  dates,
  description,
  technologies,
  hoverColor = undefined,
  url,
}: {
  dates: string;
  description: string;
  hoverColor?: string;
  role: string;
  technologies: string[];
  title: string;
  url: string;
}) {
  return (
    <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
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
            hoverColor={hoverColor}
            href={url}
            text={title}
            variant="up"
          />
          <div>
            <div className="text-slate-500">{role}</div>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
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
