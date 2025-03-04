import express from 'express';
import {dbC} from "./db.js";
import dotenv from "dotenv";
const app = express();

dotenv.config({path:"./config/.env"});
dbC();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
