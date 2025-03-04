import dotenv from "dotenv"; // Load environment variables

import mongoose from "mongoose";

export const dbC = () => {
  const uri = process.env.MONGODB_URI; // Load from .env

  mongoose.connect(uri, {
    dbName: "SkillBridge", // Specify the database name here
  })
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.error("Error occurred in db", err);
  });
};
