import dotenv from "dotenv";
import connectDB from "./db/db1.js";
import express from "express"; // Ensure app is imported/defined

const app = express();

// Configure dotenv
dotenv.config({ path: "./.env" });

// Connect to Database and start server
connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });











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