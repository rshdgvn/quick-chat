import express from "express";
import cors from "cors";
import http from "http";
import "dotenv/config";

// Create Express app Http server
const app = express();
const server = http.createServer(app);

// Middleware setup
app.use(express.json({ limit: "4mb" }));
app.use(cors());

app.use("/api/status", (req, res) => res.send("Server is live"));

const PORT = 5000;
server.listen(PORT, () => console.log("server is running ", PORT));
