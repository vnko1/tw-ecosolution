import { FC } from "react";

import { ContactUsProps } from "./ContactUs.type";
import { IconEnum, SectionsId } from "@/src/types";
import styles from "./ContactUs.module.scss";
import { UIButton } from "@/src/components";
import { scrollTo } from "@/src/utils";

const ContactUs: FC<ContactUsProps> = ({ classNames }) => {
  return (
    <div className={`${styles["contact-us"]} ${classNames}`}>
      <p className={styles["text"]}>Didn't find the answer to your question?</p>
      <UIButton
        variant="contained"
        onClick={() => scrollTo(SectionsId.CONTACT_US)}
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
