import { FC } from "react";

import { IconEnum } from "../../../Icon/Icon.type";
import styles from "./Values.module.scss";
import Value from "../Value/Value";

import windFarm from "../../../../assets/images/wind-farm.webp";
import workers from "../../../../assets/images/workers.webp";

const Values: FC = () => {
  return (
    <ul className={styles["values"]}>
      <li className={styles["values__item"]}>
        <Value
          icon={IconEnum.CIRCLE}
          title="Openness"
          text="to the world, people, new ideas and projects"
        />
      </li>
      <li className={styles["values__item"]}>
        <Value
          icon={IconEnum.GLOBAL}
          title="Responsibility"
          text="we are aware that the results of our work have an impact on our lives and the lives of future generations"
        />
      </li>
      <li className={`${styles["values__item"]} ${styles["image"]}`}>
        <img src={windFarm} alt="Wind farm" />
      </li>
      <li
        className={`${styles["values__item"]} ${styles["image"]} ${styles["col-1"]}`}
      >
        <img src={workers} alt="Workers" className={styles["positioned"]} />
      </li>
      <li className={`${styles["values__item"]} ${styles["col-2"]}`}>
        <Value
          icon={IconEnum.CPU}
          title="Innovation"
          text="we use the latest technology to implement non-standard solutions"
        />
      </li>
      <li className={`${styles["values__item"]} ${styles["col-3"]}`}>
        <Value
          icon={IconEnum.RANK}
          title="Quality"
          text="we do not strive to be the first among others, but we want to be the best in our business"
        />
      </li>
    </ul>
  );
};

export default Values;
