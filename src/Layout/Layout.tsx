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
  Footer,
} from "@/src/sections";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles["layout__container"]}>
          <Hero />
          <About />
          <Electricity />
          <Cases />
          <Questions />
          <ContactUs />
        </div>
      </main>
      <div className={styles["layout__container"]}>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
