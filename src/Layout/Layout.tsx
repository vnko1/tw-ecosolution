import { FC } from "react";

import styles from "./Layout.module.scss";
import {
  About,
  Header,
  Hero,
  Electricity,
  Cases,
  Questions,
  ContactUs,
} from "@/src/components";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles["layout__body"]}>
        <Hero />
        <About />
        <Electricity />
        <Cases />
        <Questions />
        <ContactUs />
      </main>
    </>
  );
};

export default Layout;
