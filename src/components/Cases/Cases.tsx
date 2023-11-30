import { FC, useRef, useState } from "react";
import Carousel from "react-multi-carousel";

import { IconEnum } from "@/src/types";
import styles from "./Cases.module.scss";

import { UIButton } from "@/src/components";
import CasesCarousel from "./components/Carousel/CasesCarousel";

import { casesValue } from "./values";

// import tourbines from "@/src/assets/images/tourbines.webp";
// import nuclearPlant from "@/src/assets/images/nuclear-plant.webp";
// import solarPanel from "@/src/assets/images/solar-panel.webp";
// import transformator from "@/src/assets/images/transformator.webp";
// import windmills from "@/src/assets/images/windwills.webp";

// const caseValue1 = {
//   image: tourbines,
//   alt: "Tourbines",
//   title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
//   text: "Wind Power for auto field irrigation",
//   date: "July 2023",
// };

// const caseValue2 = {
//   image: solarPanel,
//   alt: "Solar panels",
//   title: "Zhytomyr city Private Enterprise “Bosch”",
//   text: "Solar Panels for industrial use",
//   date: "November 2023",
// };

// const caseValue3 = {
//   image: transformator,
//   alt: "Transformator",
//   title: "Rivne city Private Enterprise “Biotech”",
//   text: "Thermal modules",
//   date: "October 2023",
// };

// const caseValue4 = {
//   image: windmills,
//   alt: "Transformator",
//   title: "Kherson city Private Enterprise “HealthyFarm”",
//   text: "Windmills",
//   date: "September 2021",
// };

// const caseValue5 = {
//   image: nuclearPlant,
//   alt: "Nuclear plant",
//   title: "Zaporizhia city Private Enterprise “Biotech”",
//   text: "Mini nuclear stations",
//   date: "May 2021",
// };

// const cases = [caseValue1, caseValue2, caseValue1, caseValue2, caseValue1];

const Cases: FC = () => {
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
        values={casesValue}
        setStep={setActiveStep}
        carouselRef={carouselRef}
      />
    </section>
  );
};

export default Cases;
