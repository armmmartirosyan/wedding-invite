"use server";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const user = process.env.NEXT_PUBLIC_EMAIL_USER_NAME;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export async function POST(req) {
  try {
    const data = await req.json();

    console.log("Received data:", data);

    return NextResponse.json(
      {
        message: "success",
        success: true,
        receivedData: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(`error: `, error);

    return NextResponse.json(
      {
        message: "Չհաջողվեց պատասխանել հրավերին։ Խնդրում ենք փորձել կրկին։",
        success: false,
      },
      { status: 500 }
    );
  }
}
