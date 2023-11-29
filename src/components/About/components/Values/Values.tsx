import { FC } from "react";
import cn from "classnames";

import { IconEnum } from "../../../Icon/Icon.type";
import styles from "./Values.module.scss";
import Value from "../Value/Value";

import windFarm from "../../../../assets/images/wind-farm.webp";
import workers from "../../../../assets/images/workers.webp";

const values = [
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

const Values: FC = () => {
  const classNames = (className?: string) =>
    cn(styles["values__item"], className);
  return (
    <ul className={styles["values"]}>
      {values.map((el, i) => {
        if (el.image && el.alt)
          return (
            <li key={i} className={classNames(styles["image"])}>
              <img src={el.image} alt={el.alt} />
            </li>
          );
        if (el.icon)
          return (
            <li key={i} className={classNames()}>
              <Value {...el} />
            </li>
          );
        return null;
      })}
    </ul>
  );
};

export default Values;
