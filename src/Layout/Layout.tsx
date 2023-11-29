import { FC } from "react";

import styles from "./Layout.module.scss";
import { About, Electricity, Header, Hero } from "../components";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles["layout__body"]}>
        <Hero />
        <About />
        <Electricity />
      </main>
    </>
  );
};

export default Layout;
