const express = require("express");
const {
  createOrder,
  deleteOrder,
  getOrder,
} = require("../controllers/order.js");
const { verifyToken } = require("../utils/verifyToken.js");
const router = express.Router();

//CREATE
router.post("/", verifyToken, createOrder);

//DELETE
router.delete("/:id", deleteOrder);

//GET ALL
router.get("/", verifyToken, getOrder);

export default router;
