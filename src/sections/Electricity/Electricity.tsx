import { FC, useEffect, useState } from "react";

import { useNav } from "@/src/hooks";
import { SectionsId } from "@/src/types";
import { getDataFromLS, setDataToLS } from "@/src/utils";
import styles from "./Electricity.module.scss";

const initialValue = 1134147814;

const Electricity: FC = () => {
  const electricityRef = useNav(SectionsId.ELECTRICITY);
  const initialState = getDataFromLS("value")
    ? Number(getDataFromLS("value"))
    : initialValue;

  const [eValue, setEValue] = useState(initialState);

  useEffect(() => {
    const t = setInterval(() => {
      setEValue((state) => (state += 1));
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, []);

  useEffect(() => {
    setDataToLS("value", eValue);
  }, [eValue]);

  return (
    <section
      ref={electricityRef}
      id={SectionsId.ELECTRICITY}
      className="section-paddings"
    >
      <h2 className={styles["title"]}>
        Electricity we produced <br /> for all time
      </h2>
      <p className={styles["text"]}>
        <span className={styles["text__value"]}>
          {eValue.toLocaleString("de-DE")}
        </span>
        <span className={styles["text__unit"]}>kWh</span>
      </p>
    </section>
  );
};

export default Electricity;
