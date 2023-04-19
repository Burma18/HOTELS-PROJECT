const express = require("express");
const app = express();
const signupRouter = require("./Auth/signup");
const signinRouter = require("./Auth/signin");
const getToken = require("./Auth/getToken");
const authenticateToken = require("./Auth/authFunc");
const signupGetViews = require("./routes/signupForm");

const port = process.env.PORT;

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));

app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/token", getToken);
app.use("/signup", signupGetViews);

app.listen(port, () => console.log("listening on port :", port));
