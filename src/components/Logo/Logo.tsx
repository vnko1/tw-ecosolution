import { FC } from "react";

import { IconEnum } from "@/src/types";
import styles from "./Logo.module.scss";

import { Icon } from "@/src/components";

const Logo: FC = () => {
  return (
    <a href="/" className={styles["logo"]}>
      <Icon icon={IconEnum.LOGO} size={32} />
      <span className={styles["logo__name"]}>ecosolution</span>
      <span className={styles["logo__text"]}>
        <span className={styles["logo__text--accent"]}>
          GREENERGY
          <br />
        </span>
        FOR LIFE
      </span>
    </a>
  );
};

export default Logo;
