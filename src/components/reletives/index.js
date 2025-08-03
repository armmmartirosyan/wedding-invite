import styles from "./index.module.css";

export function Reletives() {
  return (
    <section className={styles.reletives} id="reletives">
      <h2 className={`heading ${styles.title}`}>Բարեկամներ և Ընկերներ</h2>
      <p className={`text ${styles.desc}`}>
        Մենք գտել ենք մեր հավերժական սերը և ուրախ կլինենք, եթե կիսեք մեզ հետ մեր
        լուսավոր օրը։
      </p>
      <p className={`text ${styles.desc2}`}>
        Սիրով հրավիրում ենք Ձեզ մեր հարսանիքին։
      </p>
      <p className={`heading ${styles.date}`}>20.08.2025</p>
      <figure className={styles.image_box}>
        <img src={"/reletives1.jpg"} className={styles.image} alt="They" />
        <img src={"/reletives2.jpg"} className={styles.image} alt="They" />
      </figure>
    </section>
  );
}
