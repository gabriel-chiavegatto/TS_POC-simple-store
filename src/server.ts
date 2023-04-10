import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/productRoutes.js";

dotenv.config();

const server = express();
server.use(cors());
server.use(json());

server.use(routes)
console.log("hello world");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server On ${PORT}!`));