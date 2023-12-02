import windFarm from "@/src/assets/images/wind-farm.webp";
import workers from "@/src/assets/images/workers.webp";
import { IconEnum } from "@/src/types";

export const data = [
  {
    icon: IconEnum.CIRCLE,
    title: "Openness",
    text: "to the world, people, new ideas and projects",
  },
  {
    icon: IconEnum.GLOBAL,
    title: "Responsibility",
    text: "we are aware that the results of our work have an impact on our lives and the lives of future generations",
  },
  { image: windFarm, alt: "Wind farm" },
  { image: workers, alt: "Workers" },
  {
    icon: IconEnum.CPU,
    title: "Innovation",
    text: "we use the latest technology to implement non-standard solutions",
  },
  {
    icon: IconEnum.RANK,
    title: "Quality",
    text: "we do not strive to be the first among others, but we want to be the best in our business",
  },
];
