const express = require("express");
const router = express.Router();

// get to the signup form
router.get("/", (req, res) => {
  res.render("signup");
});

module.exports = router;
