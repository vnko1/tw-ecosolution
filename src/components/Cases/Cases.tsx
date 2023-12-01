import { FC, useRef, useState } from "react";
import Carousel from "react-multi-carousel";

import { useNav } from "@/src/hooks";
import { IconEnum, SectionsId } from "@/src/types";
import styles from "./Cases.module.scss";

import { UIButton } from "@/src/components";
import CasesCarousel from "./components/Carousel/CasesCarousel";

import { casesValue } from "./values";

const Cases: FC = () => {
  const casesRef = useNav(SectionsId.CASES);
  const [activeStep, setActiveStep] = useState(1);
  const maxSteps = casesValue.length;

  const carouselRef = useRef<Carousel | null>(null);

  const handleNext = () => {
    carouselRef.current && carouselRef.current.next(1);
  };

  const handleBack = () => {
    carouselRef.current && carouselRef.current.previous(1);
  };

  return (
    <section
      ref={casesRef}
      id={SectionsId.CASES}
      className={"section-paddings"}
    >
      <div className={styles["cases__container"]}>
        <div className={styles["cases__title-wrapper"]}>
          <h2 className={styles["title"]}>Successful cases of our company</h2>
        </div>
        <div className={styles["cases__data-wrapper"]}>
          <div className={styles["data"]}>
            <p className={styles["data__text-value"]}>
              {activeStep.addLeadingZero()}{" "}
              <span>/ {maxSteps.addLeadingZero()}</span>
            </p>
            <div className={styles["data__btn-group"]}>
              <UIButton
                onClick={handleBack}
                variant="icon"
                iconSize={36}
                classNames={`${styles["button"]} ${styles["button-icon"]}`}
                icon={IconEnum.ARROW}
              />
              <UIButton
                onClick={handleNext}
                variant="icon"
                iconSize={36}
                iconClassNames={styles["button__icon"]}
                classNames={`${styles["button"]} ${styles["button-icon"]}`}
                icon={IconEnum.ARROW}
              />
            </div>
          </div>
        </div>
      </div>
      <CasesCarousel
        values={casesValue}
        setStep={setActiveStep}
        carouselRef={carouselRef}
      />
    </section>
  );
};

export default Cases;
