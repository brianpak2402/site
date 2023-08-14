import { StaticImageData } from "next/image";

export type ExperienceItem = {
  organization: string;
  position: string;
  description: string;
  image: StaticImageData | string;
  url: string;
};
