"use client";

import { motion } from "framer-motion";
import { LettersPullUp } from "@/components/letters-pull-up";
import Link from "next/link";
import styles from "./index.module.css";
import { opacityScale, slideIn } from "@/utils";

export function DayPlan() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Օրվա ծրագիրը</h2>
      {/* Ekexeci */}
      <motion.div
        className={styles.banner}
        {...slideIn({
          direction: "left",
          delay: 0.1,
          duration: 0.3,
          once: false,
        })}
      >
        <Link
          href="https://maps.app.goo.gl/mwy6Cvh6JYTyFZFX7"
          target="_blank"
          className={styles.wrapper}
        >
          <div className={styles.place_info_wrapper}>
            <img src="/church.svg" alt="Church" className={styles.image} />
            <div className={styles.place_info_box}>
              <p className={styles.time}>14:00</p>
              <LettersPullUp duration={0.7} className={styles.place_name}>
                ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ
              </LettersPullUp>
            </div>
          </div>
          <p className={styles.name}>
            Սուրբ&nbsp;&nbsp;Յոթ&nbsp;&nbsp;Վերք&nbsp;&nbsp;Եկեղեցի
          </p>
          <motion.div
            className={styles.banner}
            {...opacityScale({ duration: 0.5, once: false })}
          >
            <img src="/7verk.jpg" alt="Church" className={styles.place_img} />
          </motion.div>
          <p className={styles.address}>Գյումրի, Վարդանանց հրապարակ</p>
        </Link>
      </motion.div>

      {/* Restoran */}
      <motion.div
        className={styles.banner}
        {...slideIn({
          direction: "left",
          delay: 0.1,
          duration: 0.3,
          once: false,
        })}
      >
        <Link
          href="https://maps.app.goo.gl/rNKLL8Jq3sErw4LRA"
          className={styles.wrapper}
          target="_blank"
        >
          <div className={styles.place_info_wrapper}>
            <img src="/rest.svg" alt="Rest" className={styles.image} />
            <div className={styles.place_info_box}>
              <p className={styles.time}>16:30</p>
              <LettersPullUp duration={1} className={styles.place_name}>
                ՀԱՐՍԱՆՅԱՑ &nbsp;&nbsp;ՀԱՆԴԻՍՈՒԹՅՈՒՆ
              </LettersPullUp>
            </div>
          </div>
          <p className={styles.name}>Տիգրան Մեծ Համալիր</p>
          <motion.div
            className={styles.banner}
            {...opacityScale({ duration: 0.7, once: false })}
          >
            <img
              src="/restaurant3.PNG"
              alt="Wife home"
              className={styles.place_img}
            />
          </motion.div>

          <p className={styles.address}>Գյումրի, Տերյան 143</p>
        </Link>
      </motion.div>
    </section>
  );
}
