import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default class Database {
  port = process.env.PORT || 3000;
  app;
  uri = process.env.MONGODB_URI;

  constructor(app) {
    this.app = app;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri);
      console.log("Connected to MongoDB");
      this.app.listen(this.port, () => {
        console.log(`Server is running on port ${this.port}`);
      });
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  }
}
