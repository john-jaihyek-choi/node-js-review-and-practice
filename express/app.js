import express from "express";
import path from "path";
import morgan from "morgan";
import connectDB from "./db.js";
import User from "./models/users.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./express/views");

app.use(morgan("dev"));

await connectDB();

app.get("/", (req, res) => {
  // plain routing using sendFile
  // res.sendFile(path.join(__dirname, "../clientsAndServers/views/index.html"));

  // using ejs view
  res.render("index", { val: "home content" });
});

app.get("/about", (req, res) => {
  // plain routing using sendFile
  // res.sendFile(path.join(__dirname, "../clientsAndServers/views/about.html"));

  // using ejs view
  res.render("about", { val: "about content" });
});

// redirecting other endpoints
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.get("blog/create", (req, res) => {
  res.render("create", { val: "blog content" });
});

// query mongodb database for existing users data
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch {
    console.error(err);
  }
});

// will only execute once code reaches this far
app.use((req, res) => {
  // plain routing using sendFile
  //   res
  //   .status(404)
  //   .sendFile(path.join(__dirname, "../clientsAndServers/views/404.html"));

  // using ejs view
  res.status(404).render("404", { val: "blog content" });
});

app.listen(3000, () => {
  console.log("listening on 3000....");
});
