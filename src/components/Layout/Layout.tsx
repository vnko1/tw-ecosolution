import { FC } from "react";

import styles from "./Layout.module.scss";
import { Header } from "..";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles["layout__body"]}>
        <h1>Vite + React</h1>
      </main>
    </>
  );
};

export default Layout;
