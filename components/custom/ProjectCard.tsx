import type { StaticImageData } from "next/image";
import Image from "next/image";
import AnimatedLink from "./AnimatedLink";
import Tag from "./Tag";

export default function ProjectCard({
  href,
  title,
  technologies,
  description,
  imageSrc,
}: {
  description: string;
  href: string;
  imageSrc: string | StaticImageData;
  technologies: string[];
  title: string;
}) {
  return (
    <div className=" bg-slate-800/60 p-3 rounded-md group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:drop-shadow-lg" />
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <AnimatedLink
            arrowDirection="up"
            href={href}
            text={title}
          />
          <p className="mt-2 text-sm leading-normal">{description}</p>
        </h3>
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
      <Image
        alt={title}
        className="rounded border-2 border-purple-200/10 transition group-hover:border-purple-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        height="48"
        src={imageSrc}
        style={{ color: "transparent" }}
        width="200"
      />
    </div>
  );
}
