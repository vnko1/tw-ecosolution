import { FC } from "react";

import { SectionsId } from "@/src/types";
import { useNav } from "@/src/hooks";
import styles from "./ContactUs.module.scss";

import { Contacts, ContactForm } from "./components";

const ContactUs: FC = () => {
  const contactUsRef = useNav(SectionsId.CONTACT_US);
  return (
    <section
      ref={contactUsRef}
      id={SectionsId.CONTACT_US}
      className={`section-paddings ${styles["contact-us"]}`}
    >
      <h2 className={styles["title"]}>Contact us</h2>
      <div className={styles["contact-us__wrapper"]}>
        <div className={styles["contact-us__contacts-wrapper"]}>
          <Contacts />
        </div>
        <div className={styles["contact-us__form-wrapper"]}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
