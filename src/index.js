
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/db1.js";
import { app } from "./app.js";

const startServer = async () => {
    try {
        await connectDB();

        const port = process.env.PORT || 8000;

        app.listen(port, () => {
            console.log(`Server is running at port: ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();











/*
import express from "express";
const app = express()
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error){
        console.error("ERROR", error)
        throw error
    }
    
})()

*/