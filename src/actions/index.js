"use server";

import nodemailer from "nodemailer";

const user = process.env.NEXT_PUBLIC_EMAIL_USER_NAME;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export async function sendEmail(formData) {
  const invitedBy = formData.get("invitedBy") || "";
  const nameSurname = formData.get("nameSurname") || "";
  const willCome = formData.get("willCome") || "";
  const numberOfGuests = formData.get("numberOfGuests") || "";

  if (!invitedBy || !nameSurname || !willCome) {
    return {
      message: "Խնդրում ենք լրացնել բոլոր դաշտերը։",
      success: false,
    };
  }

  const transporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user,
      pass,
    },
  });

  const mailData = {
    from: "'Responded to the invite' <armenmartirosyan020@gmail.com>",
    to: "armmmartirosyan@mail.ru", //vplg2000@mail.ru
    subject: "Responded to the invite.",
    text: nameSurname,
    html: `<div>${nameSurname}<br>${invitedBy}<br>${willCome}<br>${
      willCome === "Մենք կգանք" && "Մենք կգանք` " + numberOfGuests
    }</div>`,
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    return {
      message: "Չհաջողվեց պատասխանել հրավերին։ Խնդրում ենք փորձել կրկին։",
      success: false,
    };
  }

  return { success: true, message: "success" };
}
