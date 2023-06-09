import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
// import cors from "cors";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
const PORT = 5000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors);
app.use("/", Routes);
// app.get("/", (req, res) => res.send('Hello world!'));
Connection(username, password);
app.listen(PORT, () =>
  console.log("Server successfully running to :>> ", PORT)
);
