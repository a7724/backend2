// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.json({
//     mesg: "hello",
//   });
// });

// app.get("/users", (req, res) => {
//   res.json({
//     mesg: "hello users",
//   });
// });

// app.get("/orders", (req, res) => {
//   res.json({
//     mesg: "hello orders",
//   });
// });

// app.listen(3000);

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
// const cookieParser = require("cookieParser");
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const hotelsRoute = require("./routes/hotels.js");
const roomsRoute = require("./routes/rooms.js");
const orderRoute = require("./routes/order.js");

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
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
// app.use(cookieParser());
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

app.get("/abcorders", (req, res) => {
  res.json({
    mesg: "hello orders",
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
