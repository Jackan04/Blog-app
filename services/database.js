import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default class Database {
  app;
  uri = process.env.MONGODB_URI;

  constructor(app) {
    this.app = app;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri);
      console.log("Connected to MongoDB");
      this.app.listen(3000);
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  }
}
