"use client";

import { motion } from "framer-motion";
import { slideIn } from "@/utils";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { LettersPullUp } from "@/components/letters-pull-up";
import { useCallback } from "react";

export function Banner() {
  const handleScroll = useCallback(() => {
    if (window && document) {
      const element = document.getElementById("reletives");

      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.banner} id="banner">
      <div />
      <div>
        <h1 className={`heading ${styles.title}`}>Vahan and Mariam</h1>
        <figure className={styles.images_block}>
          <img src={"/01.webp"} className={styles.image} alt="They" />
          <motion.div
            className={styles.container}
            {...slideIn({
              direction: "down",
              type: "spring",
              delay: 0,
              duration: 0.8,
              once: true,
            })}
          >
            <img src={"/02.webp"} className={styles.image} alt="They" />
          </motion.div>
          <img src={"/03.webp"} className={styles.image} alt="They" />
        </figure>
        <div className={styles.invite_wrapper}>
          <LettersPullUp duration={0.9} className={`text ${styles.invite}`}>
            հԱՐՍԱՆՅԱՑ ՀՐԱՎԵՐ
          </LettersPullUp>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faCirclePlay}
        className={styles.play}
        onClick={handleScroll}
      />
    </section>
  );
}
