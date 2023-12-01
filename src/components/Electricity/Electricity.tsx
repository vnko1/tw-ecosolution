import { FC, useEffect, useState } from "react";

import { getDataFromLS, setDataToLS } from "@/src/utils";
import styles from "./Electricity.module.scss";

const initialValue = 1134147814;

const Electricity: FC = () => {
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
    <section className="section-paddings">
      <h2 className={styles["title"]}>
        Electricity we produced <br /> for all time
      </h2>
      <p className={styles["electricity__values"]}>
        <span className={styles["electricity__values-value"]}>
          {eValue.toLocaleString("de-DE")}
        </span>
        <span className={styles["electricity__values-unit"]}>kWh</span>
      </p>
    </section>
  );
};

export default Electricity;
