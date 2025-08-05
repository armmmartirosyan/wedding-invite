import { Banner, CountdownTimer, DayPlan, Form, Reletives } from "@/components";

import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <Banner />
      </main>
      <CountdownTimer targetDate="08-20-2025" />
      <main className={styles.page}>
        <Reletives />
        <DayPlan />
        <Form />
      </main>
    </>
  );
}
