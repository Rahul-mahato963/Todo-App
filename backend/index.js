import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./route/routes.js";
import dotenv from "dotenv"
import path from "path"
dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
   process.env.MONGO_URI
  )
  .then((res) => console.log("mongodb connected"))
  .catch((err) => console.log("mongodb not connected"));

  const __dirname=path.resolve()
app.use("/api",router);

app.use(express.static(path.join(__dirname, "frontend", "dist")))
app.get((req, res)=>{
res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
})

app.listen(PORT, () => {
  console.log(`server is running on the port on ${PORT}`);
});
