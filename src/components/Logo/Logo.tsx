import { FC } from "react";
import { Link } from "react-router-dom";

import { scrollTo } from "@/src/utils";
import { IconEnum, SectionsId } from "@/src/types";
import styles from "./Logo.module.scss";

import { Icon } from "@/src/components";

const Logo: FC = () => {
  return (
    <Link
      to="/"
      className={styles["logo"]}
      onClick={() => scrollTo(SectionsId.HERO)}
    >
      <Icon icon={IconEnum.LOGO} size={32} />
      <span className={styles["logo__name"]}>ecosolution</span>
      <span className={styles["logo__text"]}>
        <span className={styles["logo__text--accent"]}>
          GREENERGY
          <br />
        </span>
        FOR LIFE
      </span>
    </Link>
  );
};

export default Logo;
