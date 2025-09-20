"use client";

import { motion } from "framer-motion";
import { blurIn } from "@/utils";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePause, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { LettersPullUp } from "@/components/letters-pull-up";
import { useCallback, useRef, useState } from "react";

export function Banner() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (window && document) {
      const element = document.getElementById("reletives");

      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        return;
      }

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay failed:", err);
        });

      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [isPlaying]);

  return (
    <section className={styles.banner} id="banner">
      <audio ref={audioRef}>
        <source src="/song.mp3" type="audio/mp3" />
      </audio>
      <div />
      <div className={styles.content}>
        <h1 className={`heading ${styles.title}`}>Gagik & Lusine</h1>

        <motion.figure
          className={styles.images_block}
          {...blurIn({
            direction: "down",
            type: "spring",
            delay: 0,
            duration: 0.5,
            once: true,
          })}
        >
          <img src={"/one11.jpg"} className={styles.banner_image} alt="They" />
        </motion.figure>

        <div className={styles.bottom_info}>
          <div className={styles.invite_wrapper}>
            <LettersPullUp duration={0.9} className={`text ${styles.invite}`}>
              ՍԻՐՈՎ ՀՐԱՎԻՐՈՒՄ ԵՆՔ
            </LettersPullUp>
          </div>
          <FontAwesomeIcon
            icon={isPlaying ? faCirclePause : faCirclePlay}
            className={styles.play}
            onClick={handleScroll}
          />
        </div>
      </div>
    </section>
  );
}
