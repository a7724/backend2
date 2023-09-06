// import mongoose from "mongoose";
// const RoomSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     maxPeople: {
//       type: Number,
//       required: true,
//     },
//     desc: {
//       type: String,
//       required: true,
//     },
//     roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Room", RoomSchema);

import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    hotelId: {
      type: String,
      required: true,
    },
    total_inventory: {
      type: Number,
      default: 10,
      required: true,
    },
    total_reserved: {
      type: Number,
      default: 0,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
