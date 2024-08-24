import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";

// import { v2 as cloudinary } from "cloudinary";
// import myHotelRoutes from "./routes/my-hotels";
// import hotelRoutes from "./routes/hotels";
// import bookingRoutes from "./routes/my-bookings";
const app = express();

app.use(
  cors({
    // origin: "http://localhost:5173", 
    origin:"https://enterprise-ecommerce-frontend.vercel.app",
    credentials: true, 
  })
);

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const uri = process.env.DATABASE_URI;
if (!uri) {
  throw new Error('MONGO_URI is not defined');
}

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/my-hotels", myHotelRoutes);
// app.use("/api/hotels", hotelRoutes);
// app.use("/api/my-bookings", bookingRoutes);



app.listen(7000, () => {
  console.log("server running on localhost:7000");
});