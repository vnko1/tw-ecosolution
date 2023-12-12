import { FC } from "react";
import cn from "classnames";

import { Icon } from "@/src/components";
import { UIButtonProps } from "./UIButton.type";
import styles from "./UIButton.module.scss";

const UIButton: FC<UIButtonProps> = ({
  children,
  variant,
  classNames,
  icon,
  iconSize,
  iconClassNames,
  type = "button",
  ...props
}) => {
  const btnClassNames = cn(
    styles["button"],
    {
      [styles["contained"]]: variant === "contained",
      [styles["icon"]]: variant === "icon",
      [styles["text"]]: variant === "text",
      [styles["outlined"]]: variant === "outlined",
    },

    classNames
  );
  if (variant === "icon")
    return (
      <button {...props} type={type} className={btnClassNames}>
        <span className={iconClassNames}>
          {icon ? <Icon icon={icon} size={iconSize} /> : null}
        </span>
      </button>
    );

  return (
    <button {...props} className={btnClassNames} type={type}>
      {children}
      {icon ? (
        <span className={iconClassNames}>
          <Icon icon={icon} size={iconSize} />
        </span>
      ) : null}
    </button>
  );
};

export default UIButton;
