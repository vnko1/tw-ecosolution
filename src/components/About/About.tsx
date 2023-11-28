import { FC } from "react";
import styles from "./About.module.scss";
import Values from "./components/Values/Values";

const About: FC = () => {
  return (
    <section className={styles["about"]} id="about">
      <div className={styles["about__text-wrapper"]}>
        <h2 className={styles["title"]}>Main values of our company</h2>
        <p className={styles["text"]}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
      </div>
      <Values />
    </section>
  );
};

export default About;
