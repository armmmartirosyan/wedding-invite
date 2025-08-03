"use client";

import { sendEmail } from "@/actions";
import styles from "./index.module.css";
import { useRef } from "react";
import { LettersPullUp } from "../letters-pull-up";

export function Form() {
  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    const { message, success } = await sendEmail(formData);

    if (success) {
      formRef.current?.reset();
    }

    alert(message);
  };

  return (
    <form ref={formRef} action={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>
        Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը
        <br />
        մինչև 10․08․2025
      </h3>
      <div className={styles.radio_wrapper}>
        <input
          type="radio"
          id="wife"
          name="invitedBy"
          value="Հարսի կողմ"
          className={styles.radio}
          required
        />
        <label htmlFor="wife" className={styles.radio_label}>
          Հարսի կողմ
        </label>
      </div>
      <div className={styles.radio_wrapper}>
        <input
          type="radio"
          id="fiance"
          name="invitedBy"
          value="Փեսայի կողմ"
          className={styles.radio}
          required
        />
        <label htmlFor="fiance" className={styles.radio_label}>
          Փեսայի կողմ
        </label>
      </div>
      <input
        name="nameSurname"
        type="text"
        className={styles.input}
        placeholder="Անուն Ազգանուն"
        required
      />
      <div className={styles.radio_wrapper}>
        <input
          type="radio"
          id="willCome"
          name="willCome"
          value="Մենք կգանք"
          className={styles.radio}
          defaultChecked
        />
        <label htmlFor="willCome" className={styles.radio_label}>
          Մենք կգանք
        </label>
      </div>
      <div className={styles.radio_wrapper}>
        <input
          type="radio"
          id="cant-come"
          name="willCome"
          value="Չենք կարող գալ ։("
          className={styles.radio}
        />
        <label htmlFor="cant-come" className={styles.radio_label}>
          Չենք կարող գալ ։(
        </label>
        <input
          name="numberOfGuests"
          type="number"
          className={styles.input}
          placeholder="Հյուրերի թիվ"
        />
      </div>

      <button className={styles.submit} type="submit">
        Ուղարկել
      </button>
      <LettersPullUp duration={1} className={styles.happy_end}>
        Սիրով սպասում ենք Ձեզ
      </LettersPullUp>
    </form>
  );
}
