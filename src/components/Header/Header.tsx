import { FC, useState } from "react";

import styles from "./Header.module.scss";
import { Icon, Logo } from "..";
import { IconEnum } from "../Icon/Icon.type";
import { Modal } from "../Modal";

const Header: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const transitionClassNames = {
    enter: styles["menu-enter"],
    enterActive: styles["menu-enter-active"],
    exit: styles["menu-exit"],
    exitActive: styles["menu-exit-active"],
  };

  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header__wrapper"]}>
          <Logo />
          <div className={styles["header__btn-wrapper"]}>
            <button className={styles["header__menu-btn"]}>
              <Icon size={16} icon={IconEnum.MENU} />
            </button>
            <button className={styles["header__touch-btn"]}>
              Get in touch<span></span>
            </button>
          </div>
        </div>
      </header>
      <Modal
        isOpen={menuIsOpen}
        setIsOpen={setMenuIsOpen}
        // transitionClassName={}
        // transitionTimeOut={}
        backdropClassName=""
        bodyClassName=""
      >
        <div>MODAL</div>
      </Modal>
    </>
  );
};

export default Header;
