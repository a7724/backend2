// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import authRoute from "./routes/auth.js";
// import usersRoute from "./routes/users.js";
// import hotelsRoute from "./routes/hotels.js";
// import roomsRoute from "./routes/rooms.js";
// import orderRoute from "./routes/order.js";

// const app = express();
// dotenv.config();

// const connect = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://booking:UA1i38dYhHffyP0z@cluster0.8n3in63.mongodb.net/?retryWrites=true&w=majority"
//     );
//     mongoose.set("strictQuery", true);
//     console.log("connect to db");
//   } catch (error) {
//     throw error;
//   }
// };
// app.use(
//   cors({
//     origin: "*",
//   })
// );
// app.use(cookieParser());
// app.use(express.json());

// app.use("/auth", authRoute);
// app.use("/users", usersRoute);
// app.use("/hotels", hotelsRoute);
// app.use("/rooms", roomsRoute);
// app.use("/order", orderRoute);

// app.get("/abcusers", (req, res) => {
//   res.json({
//     mesg: "hello users",
//   });
// });

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// });

// app.listen(3000, () => {
//   connect();
//   console.log("Connected to backend.");
// });

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import orderRoute from "./routes/order.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://28leoleo28:XhnorvwaAEKKN99R@cluster0.qhafc6o.mongodb.net/test_reservation"
    );
    mongoose.set("strictQuery", true);
    console.log("connect to db");
  } catch (error) {
    throw error;
  }
};

app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);
app.use("/order", orderRoute);

app.get("/abcusers", (req, res) => {
  res.json({
    mesg: "hello users",
  });
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(3000, () => {
  connect();
  console.log("Connected to backend.");
});
