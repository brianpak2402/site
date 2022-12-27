import type { Project } from "../../typings/typings";

import jukeboxScreenshot from "../images/screenshots/jukebox-screenshot.png";
import buzzconnectScreenshot from '../images/screenshots/buzzconnect-screenshot.png';

const projectList : Project[] = [
    {
        name: "Spotify Jukebox",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed \
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: [
            {
                name: "Java",
                color: "brown",
            }
        ],
        image: jukeboxScreenshot,
        demoLink: "/",
        codeLink: "/",
    }, 
    {
        name: "BuzzConnect",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed \
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: [
            {
                name: "Java",
                color: "brown",
            }
        ],
        image: buzzconnectScreenshot,
        demoLink: "/",
        codeLink: "/",
    }, 
];

export default projectList;