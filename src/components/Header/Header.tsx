import { FC, useEffect, useState } from "react";
import cn from "classnames";

import styles from "./Header.module.scss";
import { Logo, UIButton } from "..";
import { IconEnum } from "../Icon/Icon.type";
import { Menu } from "..";

const Header: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onHandleScroll = () => {
      setTimeout(() => {
        setScrollTop(document.documentElement.scrollTop);
      }, 100);
    };

    window.addEventListener("scroll", onHandleScroll);

    return () => {
      window.removeEventListener("scroll", onHandleScroll);
    };
  }, []);

  const onHandleMenuClick = () => {
    setMenuIsOpen(true);
  };

  const onHandleTouchBtnClick = () => {};

  const headerClassNames = cn(styles["header"], {
    [styles["header--accent"]]: scrollTop > 0,
  });
  return (
    <>
      <header className={headerClassNames}>
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
              onClick={onHandleTouchBtnClick}
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
