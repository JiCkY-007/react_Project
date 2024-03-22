// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
//es6
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { mongoose } = require("mongoose");
// database connection

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const port = 8000;

const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Helloo<h1/>");
// });

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
