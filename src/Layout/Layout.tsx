import { FC } from "react";

import styles from "./Layout.module.scss";
import { About, Header, Hero } from "../components";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles["layout__body"]}>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Layout;
