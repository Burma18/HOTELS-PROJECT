const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const dotenv = require("dotenv").config();

router.post("/", async (req, res) => {
  const readFile = await fs.promises.readFile("users.txt", "utf-8");
  const userJSON = JSON.parse(readFile);

  const { username, email, password } = req.body;

  const userMatch = userJSON.find((user) => user.username === username);
  if (!userMatch) {
    res.send("username is not correct, please try again!");
    return;
  }

  const pwsMatch = await bcrypt.compare(password, userMatch.password);
  if (!pwsMatch) {
    res.send("password is not correct, please try again!");
    return;
  }

  const emailMatch = userJSON.find((user) => user.email === email);

  if (!emailMatch) {
    res.send("email is not correct, please try again!");
    return;
  }

  const accessToken = jwt.sign(
    { username: username },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "120s" }
  );
  const refreshToken = jwt.sign(
    { username: username },
    process.env.REFRESH_TOKEN_SECRET
  );

  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

module.exports = router;
