const express = require("express");
const route = express.Router();

const {
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodoById,
  deleteAllTodo
} = require("../controllers/todo.controller");
const verifyToken = require("../middleware/auth");

route.get("/",getAllTodo);
route.get("/:id",verifyToken, getTodoById);
route.post("/", createTodo);
route.put("/id", updateTodoById);
route.delete("/:id",deleteTodoById);
route.delete("/", deleteAllTodo);

module.exports = route;