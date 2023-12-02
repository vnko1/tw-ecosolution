import { FC } from "react";
import { Link } from "react-router-dom";

import { useNav } from "@/src/hooks";
import { scrollTo } from "@/src/utils";
import { IconEnum, SectionsId } from "@/src/types";
import styles from "./Footer.module.scss";
import { NavLink, Logo, UIButton } from "@/src/components";

const Footer: FC = () => {
  const footerRef = useNav(SectionsId.FOOTER);
  return (
    <footer ref={footerRef} id={SectionsId.FOOTER} className={styles["footer"]}>
      <div className={styles["footer__container-1"]}>
        <Logo />
      </div>
      <div className={styles["footer__container-2"]}>
        <UIButton
          variant="icon"
          classNames={`${styles["button"]} ${styles["btn"]}`}
          icon={IconEnum.ARROW}
          iconClassNames={styles["button__icon"]}
          iconSize={16}
          onClick={() => scrollTo(SectionsId.HERO)}
        />
      </div>
      <div className={styles["footer__container-3"]}>
        <div className={styles["icon-link"]}>
          <NavLink
            icon={IconEnum.FACEBOOK}
            size={24}
            target="_blank"
            classNames={`${styles["icon"]} ${styles["soc-icon"]}`}
          />
          <NavLink
            icon={IconEnum.INSTAGRAM}
            size={24}
            target="_blank"
            classNames={`${styles["icon"]} ${styles["soc-icon"]}`}
          />
        </div>
      </div>
      <div className={styles["footer__container-4"]}>
        <Link
          to="https://maps.app.goo.gl/UTyEsA13qhB9x7LTA"
          target="_blank"
          style={{ textDecoration: "none" }}
          className={styles["text"]}
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Link>
      </div>
      <div className={styles["footer__container-5"]}>
        <Link
          to="mailto:office@ecosolution.com"
          style={{ textDecoration: "none" }}
        >
          office@ecosolution.com
        </Link>
      </div>
      <div className={styles["footer__container-6"]}>
        <p>ecosolution &#169; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
