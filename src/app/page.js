import { Banner, CountdownTimer, DayPlan, Form, Reletives } from "@/components";

import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <Banner />
      </main>
      <div className={styles.reletives_section}>
        <main className={styles.page}>
          <Reletives />
        </main>
        <CountdownTimer targetDate={new Date(2025, 9, 22)} />
      </div>
      <main className={styles.page}>
        <DayPlan />
        <Form />
      </main>
    </>
  );
}
