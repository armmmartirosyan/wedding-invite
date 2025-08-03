"use client";

import { motion } from "framer-motion";
import { LettersPullUp } from "@/components/letters-pull-up";
import Link from "next/link";
import styles from "./index.module.css";
import { opacityScale } from "@/utils";

export function DayPlan() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Օրվա ծրագիրը</h2>
      {/* Harsi tun */}
      <Link href="#" className={styles.link}>
        <img src="/hearts.svg" alt="Hearts" className={styles.image} />
        <LettersPullUp duration={1} className={styles.place_name}>
          ՀԱՐՍԻ ՏՈՒՆ
        </LettersPullUp>
        {/* <p className={styles.place_name}></p> */}
        <p className={styles.time}>11:00</p>
        <motion.div
          className={styles.banner}
          {...opacityScale({ duration: 0.7, once: true })}
        >
          <img
            src="/wife_home.webp"
            alt="Wife home"
            className={styles.place_img}
          />
        </motion.div>

        <p className={styles.address}>Երևան, Արմենակյան 25</p>
      </Link>
      {/* Ekexeci */}
      <Link href="#" className={styles.link}>
        <img src="/church.svg" alt="Church" className={styles.image} />
        <LettersPullUp duration={0.7} className={styles.place_name}>
          ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ
        </LettersPullUp>
        <p className={styles.time}>14:00</p>
        <p className={styles.name}>Սուրբ Մարիամ Աստվածածին եկեղեցի</p>
        <motion.div
          className={styles.banner}
          {...opacityScale({ duration: 0.5, once: true })}
        >
          <img
            src="/church_img.webp"
            alt="Wife home"
            className={styles.place_img}
          />
        </motion.div>
        <p className={styles.address}>Երևան, Արմենակյան 25</p>
      </Link>
      {/* Restoran */}
      <Link href="#" className={styles.link}>
        <img src="/rest.svg" alt="Rest" className={styles.image} />
        <LettersPullUp duration={1} className={styles.place_name}>
          ՀԱՐՍԱՆՅԱՑ &nbsp;&nbsp;ՀԱՆԴԻՍՈՒԹՅՈՒՆ
        </LettersPullUp>
        <p className={styles.time}>17:00</p>
        <p className={styles.name}>Adana Music Hall</p>
        <motion.div
          className={styles.banner}
          {...opacityScale({ duration: 0.7, once: true })}
        >
          <img
            src="/restaurant.webp"
            alt="Wife home"
            className={styles.place_img}
          />
        </motion.div>

        <p className={styles.address}>Երևան, Արմենակյան 25</p>
      </Link>
    </section>
  );
}
