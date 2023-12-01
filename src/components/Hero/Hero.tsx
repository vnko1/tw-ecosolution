import { FC } from "react";
import { Link } from "react-router-dom";

import { useNav } from "@/src/hooks";
import { IconEnum, SectionsId } from "@/src/types";
import styles from "./Hero.module.scss";

import { UIButton } from "@/src/components";
import { scrollTo } from "@/src/utils";

const Hero: FC = () => {
  const heroRef = useNav(SectionsId.HERO);
  return (
    <section ref={heroRef} id={SectionsId.HERO} className={styles["hero"]}>
      <div className={styles["hero__wrapper"]}>
        <h1 className={styles["title"]}>RENEWABLE ENERGY For any task</h1>
        <div className={styles["hero__content-wrapper"]}>
          <p className={styles["text"]}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <UIButton
            onClick={() => scrollTo(SectionsId.CASES)}
            variant="outlined"
            iconSize={16}
            icon={IconEnum.ARROW}
            classNames={styles["button"]}
            iconClassNames={styles["icon"]}
          >
            Learn more
          </UIButton>
        </div>
      </div>
      <div className={styles["hero__address"]}>
        <Link
          to="https://maps.app.goo.gl/UTyEsA13qhB9x7LTA"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Link>
        <div className={styles["hero__address-mail-wrapper"]}>
          <Link
            to="mailto:office@ecosolution.com"
            style={{ textDecoration: "none" }}
          >
            office@ecosolution.com
          </Link>
          <p className={styles["copyright"]}>ecosolution &#169; 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
