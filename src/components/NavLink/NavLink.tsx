import { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { NavLinkProps } from "./NavLink.type";
import { Icon } from "..";
import styles from "./NavLink.module.scss";

const NavLink: FC<NavLinkProps> = ({
  link = "#",
  classNames,
  children,
  target = "",
  icon,
  size,
  ...props
}) => {
  const iconClassName = cn(
    styles["link"],
    { [styles["soc"]]: !children },
    classNames
  );
  return (
    <Link
      {...props}
      target={target}
      style={{ textDecoration: "none" }}
      to={link}
      className={iconClassName}
    >
      <span>
        <Icon icon={icon} size={size} />
      </span>
      {children}
    </Link>
  );
};

export default NavLink;
