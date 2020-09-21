require("dotenv").config();
const express = require("express");
import { Express, Request, Response } from "express";
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
import db from "../db/dbConfig";
import IndexRouter from "../api/index";
import RedirectRouter from "./redirectRoute";

// Connect to db
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch((err: string) => console.log(err));

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
