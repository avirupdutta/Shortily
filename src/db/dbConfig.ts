import settings from "../settings";

let database: string = "";

if (process.env.ENV_TYPE === settings.ENV_TYPES.dev) {
    database = `mongodb://localhost:27017/Shorty?readPreference=primary&appname=MongoDB%20Compass&ssl=false`;
} else if (process.env.ENV_TYPE === settings.ENV_TYPES.prod) {
    database = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.fqeoa.mongodb.net/${
        process.env.MONGO_DB_NAME
    }?retryWrites=true&w=majority`;
}

export default database;
