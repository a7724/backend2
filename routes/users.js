const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user.js");
const {
  verifyAdmin,
  verifyToken,
  verifyUser,
} = require("../utils/verifyToken.js");

const router = express.Router();

//UPDATE
router.put("/:id", [verifyToken, verifyUser], updateUser);

//DELETE
router.delete("/:id", [verifyToken, verifyUser], deleteUser);

//GET
router.get("/:id", [verifyToken, verifyUser], getUser);

//GET ALL
router.get("/", [verifyToken, verifyAdmin], getUsers);

export default router;
