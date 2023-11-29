import React, { FC } from "react";

import styles from "./Layout.module.scss";
import { About, Cases, Header, Hero } from "../components";

const Electricity = React.lazy(
  () => import("../components/Electricity/Electricity")
);
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
