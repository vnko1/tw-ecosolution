import { FC, useRef, useState } from "react";
import Carousel from "react-multi-carousel";

import styles from "./Cases.module.scss";
import { UIButton } from "..";
import { IconEnum } from "../Icon/Icon.type";
import CasesCarousel from "./components/Carousel/CasesCarousel";

import tourbines from "../../assets/images/tourbines.webp";

const caseValue1 = {
  image: tourbines,
  alt: "Tourbines",
  title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
  text: "Wind Power for auto field irrigation",
  date: "July 2023",
};

const caseValue2 = {
  image: tourbines,
  alt: "Tourbines",
  title: "Zhytomyr city Private Enterprise “Bosch”",
  text: "Solar Panels for industrial use",
  date: "November 2023",
};

const cases = [caseValue1, caseValue2, caseValue1, caseValue2, caseValue1];

const Cases: FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const maxSteps = cases.length;

  const carouselRef = useRef<Carousel | null>(null);

  const handleNext = () => {
    carouselRef.current && carouselRef.current.next(1);
  };

  const handleBack = () => {
    carouselRef.current && carouselRef.current.previous(1);
  };

  return (
    <section className={"section-paddings"}>
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
        values={cases}
        setStep={setActiveStep}
        carouselRef={carouselRef}
      />
    </section>
  );
};

export default Cases;
