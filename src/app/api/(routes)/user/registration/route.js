import dbConnect from "@/app/api/lib/db";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  // const URI = process.env.DB_URI;
  // dbConnect(URI);

  const { firstName, lastName, email, password, cPassword, tc } =
    await req.json();

  // Check if all fields are given
  if (firstName && lastName && email && password && cPassword && tc) {
    if (password !== cPassword) {
      return Response.json(
        {
          status: "error",
          message: "Password and confirm password are not same",
        },
        { status: 400 },
      );
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.Email_PASS,
      },
    });

    const mailOptions = {
      from: "moosarahil13@gmail.com",
      to: "contact@moosaraheel.com",
      subject: "Test Email",
      text: "Hello from Node.js 🚀",
    };

    await transporter.sendMail(mailOptions);
    return Response.json(
      {
        message: "Hy",
      },
      { status: 200 },
    );
  } else {
    return Response.json(
      {
        status: "error",
        message: "All fields are required",
      },
      { status: 400 },
    );
  }
};
