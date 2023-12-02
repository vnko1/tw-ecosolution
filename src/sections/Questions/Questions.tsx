import { FC } from "react";

import { useNav } from "@/src/hooks";
import { SectionsId } from "@/src/types";
import styles from "./Questions.module.scss";

import { AccordionQuestions, ContactUs } from "./components";

import { faq } from "./questionsValues";

const Questions: FC = () => {
  const questionsRef = useNav(SectionsId.QUESTIONS);
  return (
    <section
      ref={questionsRef}
      id={SectionsId.QUESTIONS}
      className={`section-paddings ${styles["questions"]}`}
    >
      <div className={styles["questions__content"]}>
        <div className={styles["content__title"]}>
          <h2 className={styles["title"]}>Frequently Asked Questions</h2>
          <ContactUs classNames={`${styles["button"]} ${styles["btn"]}`} />
        </div>
        <div className={styles["content__accordion"]}>
          <AccordionQuestions questions={faq} />
        </div>
        <ContactUs classNames={`${styles["button-mob"]} ${styles["btn"]}`} />
      </div>
    </section>
  );
};

export default Questions;
