import React, { useEffect } from "react";
import styles from "./styles.module.css";

export const CardHover: React.FC = () => {
  const updateCursor = ({
    x: pointerX,
    y: pointerY,
  }: {
    x: number;
    y: number;
  }): void => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    document.documentElement.style.setProperty("--x", x);
    document.documentElement.style.setProperty("--y", y);
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", updateCursor);

    return () => {
      document.body.removeEventListener("pointermove", updateCursor);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.current__ul}>
          <li className={styles.card}>
            <span className={styles.current__span}>1</span>
          </li>
          <li className={styles.card}>
            <span className={styles.current__span}>2</span>
          </li>
          <li className={styles.card}>
            <span className={styles.current__span}>3</span>
          </li>
          <li className={styles.card}>
            <span className={styles.current__span}>4</span>
          </li>
          <li className={styles.card}>
            <span className={styles.current__span}>5</span>
          </li>
          <li className={styles.card}>
            <span className={styles.current__span}>6</span>
          </li>
          <li className={styles.card}>
            <span className={styles.current__span}>7</span>
          </li>
          <li className={styles.card}>
            <span className={styles.current__span}>8</span>
          </li>
          <li className={styles.card}>
            <span className={styles.current__span}>9</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
