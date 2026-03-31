import fs from "fs";
import path from "path";
import Handlebars from "handlebars";
import nodemailer from "nodemailer";
const sendMail = async (fullName, email, subject, message) => {
  if (fullName && email && subject && message) {
    const emailTemplate = path.join(
      process.cwd(),
      "src",
      "app",
      "emails",
      "message.hbs",
    );
    const source = fs.readFileSync(emailTemplate, "utf-8");
    const template = Handlebars.compile(source);
    const html = template({
      fullName,
      email,
      subject,
      message,
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.Email_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contact@moosaraheel.com",
      subject: `Message from ${fullName} for ${subject}`,
      html: html,
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  } else {
    return false;
  }
};

export default sendMail;
