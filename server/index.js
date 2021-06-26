//starting point of server app
import express from "express";
import bodyParser from "body-parser";
import mailRoutes from "./routes/mail.js";

import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", mailRoutes);

app.get("/", (req, res) => {
	res.send("Hello from Portfolio API wth mailer!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
