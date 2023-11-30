import { FC } from "react";
import { ContactUsProps } from "./ContactUs.type";
import { IconEnum } from "../../../Icon/Icon.type";
import styles from "./ContactUs.module.scss";
import { UIButton } from "../../../";

const ContactUs: FC<ContactUsProps> = ({ classNames }) => {
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

export default ContactUs;
