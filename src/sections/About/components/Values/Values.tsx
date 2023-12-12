import { FC } from "react";
import cn from "classnames";

import { IconEnum } from "@/src/types";
import Value from "../Value/Value";
import styles from "./Values.module.scss";
import lib from "./data.json";

const icons = [
  IconEnum.CIRCLE,
  IconEnum.GLOBAL,
  "",
  "",
  IconEnum.CPU,
  IconEnum.RANK,
];

const formattedData = lib.map((i, index) => ({ ...i, icon: icons[index] }));

const Values: FC = () => {
  const classNames = (className?: string) =>
    cn(styles["values-list__item"], className);
  return (
    <ul className={styles["values-list"]}>
      {formattedData.map((el, i) => {
        if (el.image && el.alt)
          return (
            <li key={i} className={classNames(styles["image-item"])}>
              <img
                src={el.image}
                alt={el.alt}
                loading="lazy"
                width="596"
                height="398"
              />
            </li>
          );
        if (el.icon && el.text && el.title)
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
