import { FC, useEffect, useState } from "react";
import cn from "classnames";

import { useNav } from "@/src/hooks";
import { scrollTo } from "@/src/utils";
import { IconEnum, SectionsId } from "@/src/types";
import styles from "./Header.module.scss";

import { Logo, UIButton, Menu } from "@/src/components";

const Header: FC = () => {
  const headerRef = useNav(SectionsId.HEADER);
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

  const onHandleTouchBtnClick = () => {
    scrollTo(SectionsId.CONTACT_US);
  };

  const headerClassNames = cn(styles["header"], {
    [styles["header--accent"]]: scrollTop > 0,
  });
  return (
    <>
      <header
        ref={headerRef}
        id={SectionsId.HEADER}
        className={headerClassNames}
      >
        <div className={styles["header__wrapper"]}>
          <Logo />
          <div className={styles["wrapper"]}>
            <UIButton
              classNames={styles["button-menu"]}
              onClick={onHandleMenuClick}
              variant="icon"
              iconSize={16}
              icon={IconEnum.MENU}
            />

            <UIButton
              onClick={onHandleTouchBtnClick}
              classNames={styles["button-touch"]}
              variant="contained"
              iconSize={7}
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
