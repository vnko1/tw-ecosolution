import { FC } from "react";

import styles from "./ContactUs.module.scss";

import Contacts from "./components/Contacts/Contacts";
import ContactForm from "./components/Form/ContactForm";

const ContactUs: FC = () => {
  return (
    <section className={`section-paddings ${styles["contact-us"]}`}>
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
