import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import videoRoute from "./routes/videoRoute.js";
import commentRoute from "./routes/commentRoute.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Database
connectDB();

// cookie
app.use(cookieParser());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
app.use(cors());

// routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/videos", videoRoute);
app.use("/api/comments", commentRoute);

// error
app.use((err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const message = err.message || "Something went wrong!";

  res.status(statusCode).json({
    message,
    statusCode,
  });
  next();
});

// ******************************************************************
app.listen(port, () => console.log(`app listening on port ${port}`));
