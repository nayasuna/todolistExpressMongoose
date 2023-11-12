require("dotenv").config()

const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || "mongodb+srv://nayasuna01:naya01@cluster0.nlhrdow.mongodb.net/todolist_express"

const db = mongoose.connect(DB_URL)

module.exports = db