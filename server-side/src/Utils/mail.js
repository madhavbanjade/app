import nodemailer from "nodemailer";

export const sendMail = async (mailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ba46b6e4f0ecaf",
        pass: "09fd7645372b89",
      },
    });
    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }}