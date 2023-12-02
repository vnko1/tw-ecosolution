import { FC } from "react";

import { IconEnum } from "@/src/types";
import styles from "./Contacts.module.scss";

import { NavLink } from "@/src/components";

const Contacts: FC = () => {
  return (
    <div className={styles["contacts"]}>
      <div>
        <p className={styles["label"]}>Phone</p>
        <ul className={styles["links"]}>
          <li>
            <NavLink link="tel:+380931234567" icon={IconEnum.CALL} size={24}>
              38 (093) 12 34 567
            </NavLink>
          </li>
          <li>
            <NavLink link="tel:+380931234567" icon={IconEnum.CALL} size={24}>
              38 (093) 12 34 567
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <p className={styles["label"]}>E-mail:</p>
        <div className={styles["links"]}>
          <NavLink
            link="mailto:office@ecosolution.com"
            icon={IconEnum.SMS}
            size={24}
          >
            office@ecosolution.com
          </NavLink>
        </div>
      </div>
      <div>
        <p className={styles["label"]}>Address:</p>
        <div className={styles["links"]}>
          <NavLink
            link="https://maps.app.goo.gl/UTyEsA13qhB9x7LTA"
            icon={IconEnum.CALL}
            size={24}
            target="_blank"
          >
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </NavLink>
        </div>
      </div>
      <div>
        <p className={styles["label"]}>Social Networks:</p>
        <div className={`${styles["links"]} ${styles["soc"]}`}>
          <NavLink icon={IconEnum.FACEBOOK} size={24} target="_blank" />
          <NavLink icon={IconEnum.INSTAGRAM} size={24} target="_blank" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
