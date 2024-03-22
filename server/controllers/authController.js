const express = require("express");
const { hashPassword, comparePassword } = require("../helpers/auth.js");
const jwt = require("jsonwebtoken");
const test = (req, res) => {
  res.json(`test is working `);
};
const User = require("../models/user.js");

// register Endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }

    // check if pasword is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters Long",
      });
    }

    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already taken",
      });
    }
    const hashedPassword = await hashPassword(password);
    // create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};
// login endpoint

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user Exists

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: "no user found",
      });
    }
    // check if password matched
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
      res.json("password-matched");
    }
    if (!match) {
      return res.json({ error: "password do not match" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ error: "Failed to verify token." });
    }
    res.json(user);
  });
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
