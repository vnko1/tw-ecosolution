import { FC } from "react";
import { ILayoutProps } from "./Layout.type";

import styles from "./Layout.module.scss";
import { Header } from "..";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles["layout__body"]}>{children}</main>
    </>
  );
};

export default Layout;
