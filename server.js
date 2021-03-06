const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect to Database
connectDB();

// Init Middleware
app.use(
  express.json({
    extended: false
  })
);

app.get("/", (req, res) => res.send("API RUNNING"));

// Define Routes Here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on" + PORT));
