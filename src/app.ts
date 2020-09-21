require("dotenv").config();
import { Express, Request, Response } from "express";
import db from "./db/dbConfig";
import IndexRouter from "./api/index";
import RedirectRouter from "./redirectRoute";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import expressLayouts from "express-ejs-layouts";

// Connect to db
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch((err: string) => console.log(err));

const PORT: string | number = process.env.PORT || 3000;
const app: Express = express();

// setting up the view engine
app.set("view engine", "ejs");

// setting up the middlewares
app.use(cors());
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
