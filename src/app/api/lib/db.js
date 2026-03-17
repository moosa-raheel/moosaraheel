import mongoose from "mongoose";

const dbConnect = async (URI) => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    const options = {
      dbName: "moosaraheel",
    };
    await mongoose.connect(URI, options);
    console.log("Database connect successfully...");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
