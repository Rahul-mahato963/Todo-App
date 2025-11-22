import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./route/routes.js";

import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors({
  origin: ["https://todo-app-frontend.onrender.com", "http://localhost:5173"],
  credentials: true,
}));

app.use(express.json());

mongoose
  .connect(
   process.env.MONGO_URI
  )
  .then((res) => console.log("mongodb connected"))
  .catch((err) => console.log("mongodb not connected"));

  
app.use("/api",router);



app.listen(PORT, () => {
  console.log(`server is running on the port on ${PORT}`);
});
