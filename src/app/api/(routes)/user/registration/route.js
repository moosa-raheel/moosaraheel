import dbConnect from "@/app/api/lib/db";

export const POST = async (req) => {
  const URI = process.env.DB_URI;
  dbConnect(URI);

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
