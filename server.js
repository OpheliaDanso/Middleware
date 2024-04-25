const express = require("express");
const app = express();

const PORT = process.env.Port || 8080;

const myMiddleware = (req, res, next) => {
  console.log("I am Mr Middleware");
  next();
};

const myOtherMiddleware = (req, res, next) => {
  setTimeout(() => {
    console.log("I am also another Middleware");
  }, 3000);
  next();
};

app.use(myMiddleware);
app.use(myOtherMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to Middleware");
});

const tellMeMiddleware = (req, res, next) => {
  console.log("this is another routing middleware");
  next();
};

app.get("/somewhere", tellMeMiddleware, (req, res) => {
  res.send("I am somewhere");
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
