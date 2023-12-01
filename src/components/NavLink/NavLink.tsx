import { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { NavLinkProps } from "./NavLink.type";
import styles from "./NavLink.module.scss";
import { Icon } from "..";

const NavLink: FC<NavLinkProps> = ({
  link = "#",
  classNames,
  children,
  target = "",
  ...props
}) => {
  const iconClassName = cn(
    styles["link"],
    { [styles["soc"]]: !children },
    classNames
  );
  return (
    <Link
      target={target}
      style={{ textDecoration: "none" }}
      to={link}
      className={iconClassName}
    >
      <span>
        <Icon {...props} />
      </span>
      {children}
    </Link>
  );
};

export default NavLink;
