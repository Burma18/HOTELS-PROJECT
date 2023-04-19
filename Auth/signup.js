const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const dotenv = require("dotenv").config();

router.post("/", async (req, res) => {
  const readFile = await fs.promises.readFile("users.txt", "utf-8");
  const userJSON = JSON.parse(readFile);

  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  userJSON.push({
    id: userJSON.length + 1,
    username,
    email,
    password: hash,
  });

  await fs.promises.writeFile("users.txt", JSON.stringify(userJSON));

  res.send("successful signup!");
});

module.exports = router;
