const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { generateAccessToken } = require("./generateToken");

router.post("/", (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (refreshToken == null) {
    res.status(401).send("refresh token is empty");
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).send("wrong refresh token");

    const accessToken = generateAccessToken({ name: user.username });

    console.log("accesstoken: ", accessToken);

    res.json({ accessToken: accessToken });
  });
});

module.exports = router;
