const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// create a signup view
router.get("/signup", authController.signup_get);

router.post("/signup", authController.signup_post);

router.get("/signin", authController.signin_get);

router.post("/signin", authController.signin_post);

router.get("/logout", authController.logout_get);

module.exports = router;
