import type { Project, Technology } from "../../typings/typings";
import techMap from "./technologies";

import jukeboxScreenshot from "../images/screenshots/jukebox-screenshot.png";
import buzzconnectScreenshot from '../images/screenshots/buzzconnect-screenshot.png';

const projectList : Project[] = [
    {
        name: "Spotify Jukebox",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed \
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: [
            techMap.get("Serverless Stack Toolkit") as Technology,
            techMap.get("React") as Technology,
            techMap.get("Chakra UI") as Technology,
            techMap.get("Spotify API") as Technology,
        ],
        image: jukeboxScreenshot,
        liveURL: "/",
        demoLink: "/",
        codeLink: "/",
    }, 
    {
        name: "BuzzConnect",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed \
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: [
            techMap.get("Spring Boot") as Technology,
            techMap.get("Java") as Technology,
            techMap.get("SQL") as Technology,
        ],
        image: buzzconnectScreenshot,
        liveURL: "/",
        demoLink: "/",
        codeLink: "/",
    }, 
];

export default projectList;