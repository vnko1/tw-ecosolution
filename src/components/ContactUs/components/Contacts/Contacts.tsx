import { FC } from "react";
import { Link } from "react-router-dom";

import { IconEnum } from "../../../Icon/Icon.type";
import styles from "./Contacts.module.scss";
import { Icon } from "../../../";

const Contacts: FC = () => {
  return (
    <div className={styles["contacts"]}>
      <div className={styles["contacts__tel-wrapper"]}>
        <p className={styles["label"]}>Phone</p>
        <ul className={styles["wrapper"]}>
          <li>
            <Link
              to="tel:+380981234567"
              style={{ textDecoration: "none" }}
              className={styles["icon-link"]}
            >
              <span>
                <Icon size={24} icon={IconEnum.CALL} />
              </span>
              38 (098) 12 34 567
            </Link>
          </li>
          <li>
            <Link
              to="tel:+380931234567"
              style={{ textDecoration: "none" }}
              className={styles["icon-link"]}
            >
              <span>
                <Icon size={24} icon={IconEnum.CALL} />{" "}
              </span>
              38 (093) 12 34 567
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["contacts__mail-wrapper"]}>
        <p className={styles["label"]}>E-mail:</p>
        <div className={styles["wrapper"]}>
          <Link
            to="mailto:office@ecosolution.com"
            style={{ textDecoration: "none" }}
            className={styles["icon-link"]}
          >
            <span>
              <Icon size={24} icon={IconEnum.SMS} />
            </span>
            office@ecosolution.com
          </Link>
        </div>
      </div>
      <div className={styles["contacts__address-wrapper"]}>
        <p className={styles["label"]}>Address:</p>
        <div className={styles["wrapper"]}>
          <Link
            to="https://maps.app.goo.gl/UTyEsA13qhB9x7LTA"
            target="_blank"
            style={{ textDecoration: "none" }}
            className={styles["icon-link"]}
          >
            <span>
              <Icon size={24} icon={IconEnum.MAP} />
            </span>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </Link>
        </div>
      </div>
      <div className={styles["contacts__soc-wrapper"]}>
        <p className={styles["label"]}>Social Networks:</p>
        <div className={`${styles["wrapper"]} ${styles["soc"]}`}>
          <Link
            to="#"
            target="_blank"
            style={{ textDecoration: "none" }}
            className={`${styles["icon-link"]} ${styles["soc"]}`}
          >
            <span>
              <Icon size={24} icon={IconEnum.FACEBOOK} />
            </span>
          </Link>
          <Link
            to="#"
            target="_blank"
            style={{ textDecoration: "none" }}
            className={`${styles["icon-link"]} ${styles["soc"]}`}
          >
            <span>
              <Icon size={24} icon={IconEnum.INSTAGRAM} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
