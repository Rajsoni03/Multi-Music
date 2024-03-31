const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/error.middleware')

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// router
app.use("/api/song", require('./routes/songs.route'));
app.use("/api/user", require('./routes/user.route'));

// Homepage Endpoint
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Error handler setup
app.use(errorHandler);

// DB Connection and Start The Server
mongoose.connect(mongoUri)
  .then(() => {
    console.log("Connected with MongoDB.");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed.", err.message);
  });
