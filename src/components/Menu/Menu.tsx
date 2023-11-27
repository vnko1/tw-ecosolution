import { createPortal } from "react-dom";
import { FC, MouseEvent, useEffect, useRef } from "react";

import { MenuProps } from "./Menu.type";
import { useGetScreenSize, useSwipe } from "../../hooks";
import styles from "./Menu.module.scss";

import Animation from "../Animation/Animation";
import { Icon } from "..";
import { IconEnum } from "../Icon/Icon.type";

const navItem = [
  { title: "Main", link: "#" },
  { title: "About", link: "#" },
  { title: "Cases", link: "#" },
  { title: "FAQ", link: "#" },
  { title: "Contact Us", link: "#" },
];

const socItem = [
  { icon: IconEnum.FACEBOOK, link: "#" },
  { icon: IconEnum.INSTAGRAM, link: "#" },
];

const Modal: FC<MenuProps> = ({ setIsOpen, isOpen }) => {
  const nodeRef = useRef(null);
  const [screen] = useGetScreenSize();

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

  return createPortal(
    <Animation
      in={isOpen}
      nodeRef={nodeRef}
      timeout={200}
      classNames={transitionClassNames}
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={styles["menu__backdrop"]}
        onClick={onHandleClick}
      >
        <div className={styles["menu__body"]}>
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
            <ul className={styles["menu__list"]}>
              {navItem.map(({ title, link }, index) => {
                return (
                  <li key={index} className={styles["menu__list-item"]}>
                    <a href={link} className={styles["menu__list-item-link"]}>
                      {title}
                      <span>
                        <Icon icon={IconEnum.ARROW} size={16} />
                      </span>
                    </a>
                  </li>
                );
              })}
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
