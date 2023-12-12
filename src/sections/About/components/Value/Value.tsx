import { FC } from "react";

import { useGetScreenSize } from "@/src/hooks";
import { Icon } from "@/src/components";
import styles from "./Value.module.scss";
import { ValueProps } from "./Value.type";

const Value: FC<ValueProps> = ({ icon, title, text }) => {
  const [screenSize] = useGetScreenSize();

  const isLaptopScreen = screenSize > 1179;

  const iconSize = isLaptopScreen ? 24 : 16;

  return (
    <div className={styles["value-wrapper"]}>
      <h3 className={styles["title"]}>
        <Icon icon={icon} size={iconSize} />
        {title}
      </h3>
      <p className={styles["text"]}>{text}</p>
    </div>
  );
};

export default Value;
