import sendMail from "@/app/lib/mailer";

export const POST = async (req) => {
  const { fullName, email, message, subject } = await req.json();
  if (fullName && email && message && subject) {
    const result = await sendMail(fullName, email, subject, message);

    if (result) {
      return Response.json({
        status: "success",
        message: "message has been sent successfully.",
      });
    } else {
      return Response.json({
        status: "error",
        message: "Something went wrong. Try again later.",
      });
    }
  }
  return Response.json({
    status: "error",
    message: "All fields required.",
  });
};
