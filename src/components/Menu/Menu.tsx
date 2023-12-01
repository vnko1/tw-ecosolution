import { FC, MouseEvent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import { scrollTo } from "@/src/utils";
import { useGetScreenSize, useSwipe } from "@/src/hooks";
import { useAppContext } from "@/src/context";
import { IconEnum } from "@/src/types";
import { MenuProps } from "./Menu.type";
import styles from "./Menu.module.scss";

import { Animation, Icon, UIButton } from "@/src/components";

const navItem = ["Main", "About", "Cases", "FAQ", "Contact Us"];

const socItem = [
  { icon: IconEnum.FACEBOOK, link: "#" },
  { icon: IconEnum.INSTAGRAM, link: "#" },
];

const Modal: FC<MenuProps> = ({ setIsOpen, isOpen }) => {
  const nodeRef = useRef(null);
  const [screen] = useGetScreenSize();

  const { activeLinkId } = useAppContext();
  useSwipe(setIsOpen);

  useEffect(() => {
    const handlePressESC = (e: { code: string }) => {
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handlePressESC);

    return () => {
      window.removeEventListener("keydown", handlePressESC);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (screen < 769) {
      isOpen && document.body.classList.add(styles["no-scroll"]);
      !isOpen && document.body.classList.remove(styles["no-scroll"]);
    }
  }, [isOpen, screen]);

  const onHandleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const transitionClassNames = {
    enter: styles["menu-enter"],
    enterActive: styles["menu-enter-active"],
    exit: styles["menu-exit"],
    exitActive: styles["menu-exit-active"],
  };

  const renderNavButtons = (value: string, index: number) => {
    const id = value.split(" ").join("_").toLowerCase();
    const navButtonClassNames = cn(styles["menu__nav-list-item-link"], {
      [styles["active"]]: activeLinkId === id,
    });

    const onHandleNavClick = (id: string) => {
      setIsOpen(false);
      scrollTo(id);
    };

    return (
      <li key={index} className={styles["menu__nav-list-item"]}>
        <UIButton
          onClick={() => onHandleNavClick(id)}
          variant="text"
          classNames={navButtonClassNames}
          icon={IconEnum.ARROW}
          iconSize={16}
          iconClassNames={styles["icon"]}
        >
          {value}
        </UIButton>
      </li>
    );
  };

  return createPortal(
    <Animation
      in={isOpen}
      nodeRef={nodeRef}
      timeout={200}
      classNames={transitionClassNames}
      mountOnEnter
      unmountOnExit
    >
      <div className={styles["menu__backdrop"]} onClick={onHandleClick}>
        <div className={styles["menu__body"]} ref={nodeRef}>
          <div className={styles["menu__content-wrapper"]}>
            <div className={styles["menu__btn-wrapper"]}>
              <button
                className={styles["menu__icon-btn"]}
                onClick={() => setIsOpen(false)}
              >
                <span>
                  <Icon icon={IconEnum.CROSS} size={20} />
                </span>
                close
              </button>
            </div>
            <ul className={styles["menu__nav-list"]}>
              {navItem.map((el, index) => renderNavButtons(el, index))}
            </ul>
          </div>
          <div className={styles["menu__soc-wrapper"]}>
            <ul className={styles["menu__soc-list"]}>
              {socItem.map(({ link, icon }, index) => {
                return (
                  <li key={index} className={styles["menu__soc-list-item"]}>
                    <a
                      href={link}
                      className={`${styles["menu__soc-list-item-link"]} animation`}
                    >
                      <Icon icon={icon} size={24} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Animation>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
