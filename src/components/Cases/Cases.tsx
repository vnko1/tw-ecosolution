import { FC } from "react";

import styles from "./Cases.module.scss";
import { UIButton } from "..";
import { IconEnum } from "../Icon/Icon.type";
import Case from "./components/Case/Case";
import tourbines from "../../assets/images/tourbines.webp";

const caseValue = {
  image: tourbines,
  alt: "Tourbines",
  title: "Zhytomyr city Private Enterprise “Bosch",
  text: "Wind Power for auto field irrigation",
  date: "July 2023",
};
const Cases: FC = () => {
  return (
    <section className={"section-paddings"}>
      <div className={styles["cases__container"]}>
        <div className={styles["cases__title-wrapper"]}>
          <h2 className={styles["title"]}>Successful cases of our company</h2>
        </div>
        <div className={styles["cases__data-wrapper"]}>
          <div className={styles["data"]}>
            <p className={styles["data__text-value"]}>
              01 <span>/ 05</span>
            </p>
            <div className={styles["data__btn-group"]}>
              <UIButton
                onClick={() => {}}
                variant="icon"
                iconSize={36}
                classNames={`${styles["button"]} ${styles["button-icon"]}`}
                icon={IconEnum.ARROW}
              />
              <UIButton
                onClick={() => {}}
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
      <ul className={styles["cases__carousel"]}>
        <Case {...caseValue} />
      </ul>
    </section>
  );
};

export default Cases;
