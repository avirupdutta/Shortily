import express, { Router, Request, Response } from "express";
import CustomUrl from "../db/models/CustomUrl";

const router: Router = express.Router();

router.get(
    "/:uid",
    async (req: Request, res: Response): Promise<void> => {
        const uid = req.params.uid;

        try {
            const url = await CustomUrl.findOne({ uid });

            if (!url) {
                res.render("404");
            } else {
                const mainUrl: string = url.mainUrl.toString();
                res.redirect(mainUrl);
            }
        } catch (error) {
            console.log(error);
            res.render("500");
        }
    }
);

export default router;
