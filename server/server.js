import express from "express";
import cors from "cors";
import http from "http";
import "dotenv/config";
import { connectDB } from "./lib/db.js";

// Create Express app Http server
const app = express();
const server = http.createServer(app);

// Middleware setup
app.use(express.json({ limit: "4mb" }));
app.use(cors());

app.use("/api/status", (req, res) => res.send("Server is live"));

// connect to MongoDB
await connectDB();

const PORT = process.env.PORT;
server.listen(PORT, () => console.log("server is running ", PORT));
