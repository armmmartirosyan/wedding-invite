import { Banner, CountdownTimer, DayPlan, Form, Reletives } from "@/components";

import styles from "@/styles/page.module.css";

export default function Home() {
  const date = new Date(2025, 9, 22);
  return (
    <div className={styles.page}>
      <main className={styles.wrapper}>
        <Banner />
      </main>
      <main className={styles.wrapper}>
        <Reletives />
        <CountdownTimer />
        <DayPlan />
        <Form />
      </main>
    </div>
  );
}
