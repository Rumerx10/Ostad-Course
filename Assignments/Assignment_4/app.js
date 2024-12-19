import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import TaskRouter from "./routes/api.js";
import UserRouter from "./routes/userRouters.js";


import {
  MONGODB_CONNECTION,
  JWT_SECRET,
  JWT_EXPIRATION_TIME,
  MAX_JSON_SIZE,
  URL_ENCODED,
  REQUEST_LIMIT_NUMBER,
  REQUEST_LIMIT_TIME,
  PORT,
  WEB_CACHE,
} from "./app/config/config.js";
import fileUpload from "express-fileupload";

const app = express();

// Global Application Middleware

app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));
// Rate Limiter
const limit = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limit);

// Web Caching
app.set("etag", WEB_CACHE);

// MongoDB connection
export const connectDB = async () => {
  try {
    await mongoose
      .connect(MONGODB_CONNECTION, {
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.log("Error connecting to MongoDB");
      });
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

connectDB();

// You need to connect mongoDB here

// Set API Routers
app.use("/api", TaskRouter);
app.use("/api", UserRouter);

// Set application storage
app.use(express.static("storage"));

app.listen(PORT, () =>
  console.log(`Server is runnig at http://localhost:${PORT}`)
);
