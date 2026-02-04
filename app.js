import express from "express";
import morgan from "morgan";

import postRoutes from "./routes/postRoutes.js";
import Database from "./services/database.js";

// Create new express app
const app = express();

// Database service
const db = new Database(app);
db.connect();

// Set the view engine to ejs
app.set("view engine", "ejs");

// Directory for static files
app.use(express.static("public"));

// Encode data from url
app.use(express.urlencoded());

// HTTP Logger
app.use(morgan("dev"));

// Page routing
app.use(postRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page Not Found" });
});
