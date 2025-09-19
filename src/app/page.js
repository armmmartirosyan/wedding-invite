import { Banner, CountdownTimer, DayPlan, Form, Reletives } from "@/components";

import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.wrapper}>
        <Banner />
      </main>
      <main className={`${styles.wrapper} ${styles.scrollable}`}>
        <Reletives />
        <CountdownTimer targetDate={new Date(2025, 9, 22)} />
        <DayPlan />
        <Form />
      </main>
    </div>
  );
}
