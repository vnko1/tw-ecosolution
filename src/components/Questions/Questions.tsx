import { FC } from "react";

import styles from "./Questions.module.scss";
import AccordionQuestions from "./components/Accordion/AccordionQuestions";
import { Question } from "./Questions.type";
import ContactUs from "./components/ContactButton/ContactUs";

const faq: Question[] = [
  {
    summary:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    details:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    expandValue: "panel1",
  },
  {
    summary:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    details:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    expandValue: "panel2",
  },
  {
    summary:
      "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    details:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    expandValue: "panel3",
  },
  {
    summary:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    details:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    expandValue: "panel4",
  },
  {
    summary:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    details:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    expandValue: "panel5",
  },
];

const Questions: FC = () => {
  return (
    <section className={`section-paddings ${styles["questions"]}`}>
      <div className={styles["questions__wrapper-text-content"]}>
        <div className={styles["wrapper__title"]}>
          <h2 className={styles["title"]}>Frequently Asked Questions</h2>
          <ContactUs classNames={`${styles["button"]} ${styles["btn"]}`} />
        </div>
        <div className={styles["wrapper__accordion"]}>
          <AccordionQuestions questions={faq} />
        </div>
        <ContactUs classNames={`${styles["button--mob"]} ${styles["btn"]}`} />
      </div>
    </section>
  );
};

export default Questions;
