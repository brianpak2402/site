import type { Technology } from "../../typings/typings";

const technologies : Technology[] = [
    {
        name: "Serverless Stack Toolkit",
        color: "red",
    },
    {
        name: "Tailwind CSS",
        color: "red",
    },
    {
        name: "Chakra UI",
        color: "orange",
    },
    {
        name: "Spotify API",
        color: "green",
    },
    {
        name: "Spotify API",
        color: "green",
    },
    {
        name: "Spring Boot",
        color: "green",
    },
    {
        name: "JavaScript",
        color: "yellow",
    },
    {
        name: "TypeScript",
        color: "blue",
    },
    {
        name: "React",
        color: "blue",
    },
    {
        name: "Axios",
        color: "purple",
    },
    {
        name: "SQL",
        color: "pink",
    },
    {
        name: "Java",
        color: "brown",
    },
    {
        name: "Next.js",
        color: "gray",
    },
]

const techMap : Map<string, Technology> = new Map<string, Technology>(
    technologies.map((item) => [item.name, item])
);

export default techMap;