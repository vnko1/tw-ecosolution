import { FC } from "react";

import { ContactUsButtonProps } from "./ContactUsButton.type";
import { IconEnum } from "@/src/types";
import styles from "./ContactUsButton.module.scss";
import { UIButton } from "@/src/components";

const ContactUsButton: FC<ContactUsButtonProps> = ({ classNames }) => {
  const onClick = () => {};
  return (
    <div className={`${styles["wrapper"]} ${classNames}`}>
      <p className={styles["text"]}>Didn't find the answer to your question?</p>
      <UIButton
        variant="contained"
        onClick={onClick}
        icon={IconEnum.ARROW}
        classNames={styles["button"]}
        iconClassNames={styles["icon"]}
        iconSize={7}
      >
        Contact Us
      </UIButton>
    </div>
  );
};

export default ContactUsButton;
