const mongoose = require("mongoose");
import { Document, Model, Schema } from "mongoose";

const customUrlSchema: Schema = new mongoose.Schema({
    mainUrl: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
    },
});

interface ICustomUrl extends Document {
    mainUrl: String;
    uid: String;
}

const CustomUrl: Model<ICustomUrl> = mongoose.model("Custom Urls", customUrlSchema);

export default CustomUrl;
