"use client";

import { motion } from "framer-motion";
import { opacityScale } from "@/utils";
import styles from "./index.module.css";

export function Reletives() {
  return (
    <section className={styles.reletives} id="reletives">
      <h2 className={`heading ${styles.title}`}>Ընկերներ և Բարեկամներ</h2>
      <p className={`text ${styles.desc2}`}>
        Սիրով հրավիրում ենք Ձեզ մեր հարսանիքին։
      </p>
      <figure className={styles.image_box}>
        <motion.div
          className={styles.container}
          {...opacityScale({ duration: 0.5, once: false })}
        >
          <img src={"/two.jpg"} className={styles.image} alt="They" />
        </motion.div>
        <motion.div
          className={styles.container}
          {...opacityScale({ duration: 0.5, once: false })}
        >
          <img src={"/three.jpg"} className={styles.image} alt="They" />
        </motion.div>
      </figure>
    </section>
  );
}
