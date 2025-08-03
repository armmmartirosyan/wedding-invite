import Image from "next/image";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export function Banner() {
  return (
    <section className={styles.banner} id="banner">
      <div />
      <div>
        <h1 className={`heading ${styles.title}`}>Vahan and Mariam</h1>
        <figure className={styles.images_block}>
          <img src={"/01.webp"} className={styles.image} alt="They" />
          <img src={"/02.webp"} className={styles.image} alt="They" />
          <img src={"/03.webp"} className={styles.image} alt="They" />
        </figure>
        <p className={`text ${styles.invite}`}>հԱՐՍԱՆՅԱՑ ՀՐԱՎԵՐ</p>
      </div>
      <FontAwesomeIcon icon={faCirclePlay} className={styles.play} />
    </section>
  );
}
