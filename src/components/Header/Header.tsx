import { FC, useState } from "react";

import styles from "./Header.module.scss";
import { Logo, UIButton } from "..";
import { IconEnum } from "../Icon/Icon.type";
import { Menu } from "..";

const Header: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onHandleMenuClick = () => {
    setMenuIsOpen(true);
  };

  const onHandleBtnClick = () => {};
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header__wrapper"]}>
          <Logo />
          <div className={styles["header__btn-wrapper"]}>
            <UIButton
              classNames={styles["header__menu-btn"]}
              onClick={onHandleMenuClick}
              variant="icon"
              iconSize={16}
              icon={IconEnum.MENU}
            />

            <UIButton
              onClick={onHandleBtnClick}
              classNames={styles["header__touch-btn"]}
              variant="contained"
              iconSize={14}
              iconClassNames={styles["icon"]}
              icon={IconEnum.ARROW}
            >
              Get in touch
            </UIButton>
          </div>
        </div>
      </header>
      <Menu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
    </>
  );
};

export default Header;
