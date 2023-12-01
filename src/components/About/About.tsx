import { FC } from "react";

import { useNav } from "@/src/hooks";
import { SectionsId } from "@/src/types";
import styles from "./About.module.scss";
import Values from "./components/Values/Values";

const About: FC = () => {
  const aboutRef = useNav(SectionsId.ABOUT);
  return (
    <section ref={aboutRef} id={SectionsId.ABOUT} className="section-paddings">
      <div className={styles["about__text-wrapper"]}>
        <div className={styles["wrapper__title"]}>
          <h2 className={styles["title"]}>Main values of our company</h2>
        </div>
        <div className={styles["wrapper__text"]}>
          <p className={styles["text"]}>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </p>
        </div>
      </div>
      <Values />
    </section>
  );
};

export default About;
