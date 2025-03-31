import nodemailer from "nodemailer";
import { generateOTP, storeOTP } from "@/utils/otp";
import { env } from "@/config/env";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: { user: env.EMAIL_USER, pass: env.EMAIL_PASS },
});

export const sendOTPEmail = async (email: string) => {
  const otp = generateOTP();
  await storeOTP(email, otp);

  const mailOptions = {
    from: env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your verification code is: ${otp}. It expires in 5 minutes.`,
  };

  await transporter.sendMail(mailOptions);
};
