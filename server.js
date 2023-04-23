const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(cookieParser());

app.use(authRoutes);

const mongodbURI =
  "mongodb+srv://sam:sam123@nodeexpressproject.eotjdr9.mongodb.net/node-auth";

mongoose
  .connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log("error from db is :", err));

app.get("/", checkUser, (req, res) => {
  res.render("home");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("listening on port :", port));
