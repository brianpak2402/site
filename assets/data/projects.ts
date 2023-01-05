import type { Project, Technology } from "../../typings/typings";
import techMap from "./technologies";

import jukeboxScreenshot from "../images/screenshots/jukebox-screenshot.png";
import buzzconnectScreenshot from '../images/screenshots/buzzconnect-screenshot.png';

const projectList : Project[] = [
    {
        name: "Spotify Jukebox",
        description_p1: "As a part of the GT WebDev club, I worked on building a serverless application that allows \
        users to host and join virtual jukeboxes that modify a host's Spotify queue through upvoting/downvoting songs. \
        I was in charge of developing API endpoints relating to any Spotify functionality, including authenticating users and \
        search for songs to add to the queue.",
        description_p2: "This project is set to go live in April 2023, so no demo or code links will be available until then.",
        technologies: [
            techMap.get("Serverless Stack Toolkit") as Technology,
            techMap.get("Chakra UI") as Technology,
            techMap.get("Spotify API") as Technology,
            techMap.get("React") as Technology,
        ],
        image: jukeboxScreenshot,
        liveURL: "/",
        demoLink: "/",
        codeLink: "/",
    }, 
    {
        name: "BuzzConnect",
        description_p1: "I worked in a team of five other students to build a full-stack web application to inform students \
        about events that are currently being hosted on Georgia Tech's campus. I led the development for this application's backend, \
        which includes a Spring Boot-backed API and a MySQL database.",
        description_p2: "I am currently making improvements on the code, so a video demo is not available at the moment.",
        technologies: [
            techMap.get("Spring Boot") as Technology,
            techMap.get("React") as Technology,
            techMap.get("Java") as Technology,
            techMap.get("SQL") as Technology,
        ],
        image: buzzconnectScreenshot,
        liveURL: "https://github.com/brianpak2402/BuzzConnect",
        demoLink: "/",
        codeLink: "https://github.com/brianpak2402/BuzzConnect",
    }, 
];

export default projectList;