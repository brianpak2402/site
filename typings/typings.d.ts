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
    liveURL: string;
    demoLink: string;
    codeLink: string;
}