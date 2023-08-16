import { ExperienceItem } from "./typings";

import RidgelinePhoto from "@public/photos/ridgeline-apps.png";
import ShimiPhoto from "@public/photos/robotic-musicianship.jpg";
import SpotboxPhoto from "@public/photos/jukebox-screenshot.png";
import BuzzConnectPhoto from "@public/photos/buzzconnect-screenshot.png";

export const Experiences: ExperienceItem[] = [
  {
    organization: "Ridgeline",
    position: "Software Engineer Intern",
    description:
      "Prototyped an audio-based trade alerts notification service leveraging AWS Cloud technologies like Amazon RDS, AWS S3, and SNS. \
      This feature is currently being used by over 600 traders.",
    image: RidgelinePhoto,
    url: "https://www.ridgelineapps.com/",
  },
  {
    organization: "GT Robotic Musicianship Lab",
    position: "Software Developer",
    description:
      'Constructed the interface for the lab\'s "Mixboard" web application, which allows users to separate certain Spotify tracks and combine them \
      on a Drag-and-Drop interface.',
    image: ShimiPhoto,
    url: "https://gtcmt.gatech.edu/robotic-musicianship",
  },
  {
    organization: "Spotbox",
    position: "Co-Founder",
    description:
      "Architected the backend support for Spotify Jukebox using DynamoDB, AWS Lambda, and API Gateway to allow users to host virtual sessions \
    for others to add, upvote, downvote, and remove songs from the host's Spotify queue.",
    image: SpotboxPhoto,
    url: "https://spotbox.live",
  },
  {
    organization: "Georgia Tech",
    position: "Contributor",
    description:
      "Designed & implemented over 15 APIs using Spring Boot and MySQL to post about upcoming on-campus events.",
    image: BuzzConnectPhoto,
    url: "",
  },
];
