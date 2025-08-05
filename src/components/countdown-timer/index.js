"use client";

import { useState, useEffect, useMemo, Fragment } from "react";
import styles from "./index.module.css";

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      օր: Math.floor(difference / (1000 * 60 * 60 * 24)),
      ժամ: Math.floor((difference / (1000 * 60 * 60)) % 24),
      րոպե: Math.floor((difference / 1000 / 60) % 60),
      վայրկյան: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const keys = Object.keys(timeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.wrapper}>
      {timeLeft["օր"] !== undefined ? (
        <>
          <h3 className={styles.title}>20 ՕԳՈՍՏՈՍ 2024</h3>
          <p className={styles.desc}>մեր հարսանիքին մնացել է</p>
          <div suppressHydrationWarning className={styles.container}>
            {keys.map((interval, index) => (
              <Fragment key={interval}>
                <p className={styles.section}>
                  <span className={styles.number}>
                    {timeLeft[interval] || "00"}
                  </span>
                  <span className={styles.text}>{interval}</span>
                </p>
                {index !== keys.length - 1 && (
                  <div className={styles.separator} />
                )}
              </Fragment>
            ))}
          </div>
        </>
      ) : (
        <p className={styles.pass}>մեր հարսանիքի օրն արդեն անցել է</p>
      )}
    </div>
  );
}
