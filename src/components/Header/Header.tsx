import { FC, useState } from "react";

import styles from "./Header.module.scss";
import { Icon, Logo } from "..";
import { IconEnum } from "../Icon/Icon.type";
import { Menu } from "..";

const Header: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onHandleMenuClick = () => {
    setMenuIsOpen(true);
  };

  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header__wrapper"]}>
          <Logo />
          <div className={styles["header__btn-wrapper"]}>
            <button
              className={styles["header__menu-btn"]}
              onClick={onHandleMenuClick}
            >
              <Icon size={16} icon={IconEnum.MENU} />
            </button>
            <button className={styles["header__touch-btn"]}>
              Get in touch<span></span>
            </button>
          </div>
        </div>
      </header>
      <Menu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
    </>
  );
};

export default Header;
