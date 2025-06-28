import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ak06666664:XZFAn0YxjrcTZIuK@cluster0.jzojjae.mongodb.net/Blog-App"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("MongoDb connection failed", error.message);
    process.exit(1);
  }
};
