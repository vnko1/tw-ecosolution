import { FC } from "react";
import { CaseProps } from "./Case.type";
import { IconEnum } from "@/src/types";
import styles from "./Case.module.scss";

import { UIButton } from "@/src/components";

const Case: FC<CaseProps> = ({ image, alt, title, text, date }) => {
  return (
    <div className={styles["case"]}>
      <div className={styles["case__image-thumb"]}>
        <img src={image} alt={alt} />
      </div>
      <div>
        <div className={styles["case__content-wrapper"]}>
          <div className={styles["content__top"]}>
            <p className={styles["title"]}>{title}</p>
            <UIButton
              onClick={() => {}}
              variant="icon"
              icon={IconEnum.ARROW}
              classNames={`${styles["button"]} ${styles["button-icon"]}`}
              iconClassNames={styles["button__icon"]}
              iconSize={28}
            />
          </div>
          <div className={styles["content__bottom"]}>
            <p className={styles["text"]}>{text}</p>
            <p className={styles["date"]}>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
