var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var questionsRouter = require("./routes/questions");
var answersRouter = require("./routes/answers");
var ratingsRouter = require("./routes/ratings");
var quizzesRouter = require("./routes/quizzes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./client/build")));

//wildcard routing
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"))
})

app.use("/", indexRouter);
//use the router created to fetch the questions
app.use("/questions", questionsRouter);
//use the router created to fetch the answers
app.use("/answers", answersRouter);
//use the router created to fetch the ratings
app.use("/ratings", ratingsRouter);
//use the router created to fetch the quizzes
app.use("/quizzes", quizzesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
