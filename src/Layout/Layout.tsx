import { FC } from "react";

import styles from "./Layout.module.scss";
import { Header, Hero } from "../components";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles["layout__body"]}>
        <Hero />
      </main>
    </>
  );
};

export default Layout;
