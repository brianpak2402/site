import { StaticImageData } from "next/image";

export type Technology = {
    name: string;
    color: string;
}

export type Project = {
    name: string;
    description: string;
    technologies: Technology[];
    image: StaticImageData;
    demoLink: string;
    codeLink: string;
}