import app from "./app.js";
import { ConnectDB } from "./config/connectDB.js";
import logger from "./utils/logger.js";

ConnectDB();

app.listen(process.env.PORT,()=>{
    logger.info(`server is running on port ${process.env.PORT}`)
})