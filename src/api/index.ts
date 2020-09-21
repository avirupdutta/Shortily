import * as express from "express";
import * as shortid from "shortid";
import { Router, Request, Response } from "express";
import CustomUrl from "../db/models/CustomUrl";

const router: Router = express.Router();

router.post(
    "/new",
    async <T>(req: Request, res: Response): Promise<void> => {
        const url: String = req.body.url;
        if (url) {
            const urlDoc = new CustomUrl({
                mainUrl: url,
                uid: shortid.generate(),
            });
            try {
                await urlDoc.save();
                res.json({ status: 200, url: `${process.env.HOST_URL}/${urlDoc.uid}` });
            } catch (error) {
                console.log(error);
                res.json({ status: 500 });
            }
        } else {
            res.status(400).json({ message: "URL is not found in request body." });
        }
    }
);

export default router;
