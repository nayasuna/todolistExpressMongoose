const express = require("express");
const route = express.Router();

const {
  getAllUser,
  getUserById,
  createUser,
  getUserTodos,
  updateUserById,
  deleteUserById,
  deleteAllUser
} = require("../controllers/user.controller");
const verifyToken = require("../middleware/auth");

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.get("/:id/todos", verifyToken ,getUserTodos)
route.post("/", createUser);
route.put("/:id", updateUserById);
route.delete("/:id", deleteUserById);
route.delete("/", deleteAllUser);

module.exports = route;