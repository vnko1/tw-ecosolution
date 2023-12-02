import { FC } from "react";
import cn from "classnames";

import styles from "./Values.module.scss";
import Value from "../Value/Value";

import { data } from "./data";

const Values: FC = () => {
  const classNames = (className?: string) =>
    cn(styles["values-list__item"], className);
  return (
    <ul className={styles["values-list"]}>
      {data.map((el, i) => {
        if (el.image && el.alt)
          return (
            <li key={i} className={classNames(styles["image-item"])}>
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
