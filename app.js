const express = require('express');
const cors = require('cors');

const db = require("./config/db")
const allRoutes = require("./routes")

const app = express()
const PORT = process.env.PORT || 3000

db.then(() => {
    console.log("berhasil connect ke mongoDB");
  })
  .catch(() => {
    console.log("gagal connect ke mongoDB");
  })


app.use(cors())
app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
})