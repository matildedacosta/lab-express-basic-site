const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/index.html");
});
app.get("/about-me", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});
app.get("/my-work", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/work.html");
});
app.get("/photo-gallery", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/photo-gallery.html");
});
app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/contact.html");
});

app.listen(3000, () => console.log("Server running on port 3000"));
