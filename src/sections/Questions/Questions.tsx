import { FC } from "react";

import { useNav } from "@/src/hooks";
import { SectionsId } from "@/src/types";
import styles from "./Questions.module.scss";

import { AccordionQuestions, ContactUsButton } from "./components";

import { faq } from "./questionsValues";

const Questions: FC = () => {
  const questionsRef = useNav(SectionsId.QUESTIONS);
  return (
    <section
      ref={questionsRef}
      id={SectionsId.QUESTIONS}
      className={`section-paddings ${styles["questions"]}`}
    >
      <div className={styles["questions__wrapper-text-content"]}>
        <div className={styles["wrapper__title"]}>
          <h2 className={styles["title"]}>Frequently Asked Questions</h2>
          <ContactUsButton
            classNames={`${styles["button"]} ${styles["btn"]}`}
          />
        </div>
        <div className={styles["wrapper__accordion"]}>
          <AccordionQuestions questions={faq} />
        </div>
        <ContactUsButton
          classNames={`${styles["button--mob"]} ${styles["btn"]}`}
        />
      </div>
    </section>
  );
};

export default Questions;
