import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.post("/", (req, res) => {
  console.log(req.body, "testing   the code ");
  res.send("hello");
});
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes); 

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});