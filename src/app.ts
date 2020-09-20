require("dotenv").config();
import express, { Express, Request, Response } from "express";
import expressLayouts from "express-ejs-layouts";
import mongoose from "mongoose";
import db from "../db/dbConfig";
import IndexRouter from "../api/index";
import RedirectRouter from "./redirectRoute";

// Connect to db
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

const PORT: string | number = process.env.PORT || 3000;
const app: Express = express();

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.render("index");
});

app.use("", RedirectRouter);
app.use("/api", IndexRouter);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
