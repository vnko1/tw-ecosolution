import { FC } from "react";

import styles from "./Layout.module.scss";
import { About, Header, Hero, Electricity, Cases } from "../components";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles["layout__body"]}>
        <Hero />
        <About />
        <Electricity />
        <Cases />
      </main>
    </>
  );
};

export default Layout;
