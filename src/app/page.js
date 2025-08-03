import { Banner, DayPlan, Form, Reletives } from "@/components";

import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Banner />
      <Reletives />
      <DayPlan />
      <Form />
    </main>
  );
}
