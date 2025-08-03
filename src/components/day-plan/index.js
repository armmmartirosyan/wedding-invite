import Link from "next/link";
import styles from "./index.module.css";

export function DayPlan() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Օրվա ծրագիրը</h2>
      {/* Harsi tun */}
      <Link href="#" className={styles.link}>
        <img src="/hearts.svg" alt="Hearts" className={styles.image} />
        <p className={styles.place_name}>ՀԱՐՍԻ ՏՈՒՆ</p>
        <p className={styles.time}>11:00</p>
        <img
          src="/wife_home.webp"
          alt="Wife home"
          className={styles.place_img}
        />
        <p className={styles.address}>Երևան, Արմենակյան 25</p>
      </Link>
      {/* Ekexeci */}
      <Link href="#" className={styles.link}>
        <img src="/church.svg" alt="Church" className={styles.image} />
        <p className={styles.place_name}>ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ</p>
        <p className={styles.time}>14:00</p>
        <p className={styles.name}>Սուրբ Մարիամ Աստվածածին եկեղեցի</p>
        <img
          src="/church_img.webp"
          alt="Wife home"
          className={styles.place_img}
        />
        <p className={styles.address}>Երևան, Արմենակյան 25</p>
      </Link>
      {/* Restoran */}
      <Link href="#" className={styles.link}>
        <img src="/rest.svg" alt="Rest" className={styles.image} />
        <p className={styles.place_name}>ՀԱՐՍԱՆՅԱՑ. ՀԱՆԴԻՍՈՒԹՅՈՒՆ</p>
        <p className={styles.time}>17:00</p>
        <p className={styles.name}>Adana Music Hall</p>
        <img
          src="/restaurant.webp"
          alt="Wife home"
          className={styles.place_img}
        />
        <p className={styles.address}>Երևան, Արմենակյան 25</p>
      </Link>
    </section>
  );
}
