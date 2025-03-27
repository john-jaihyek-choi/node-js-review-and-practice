const express = require("express")
const path = require("path")

const app = express();

app.listen(3000, () => {
    console.log("listening on 3000....")
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../clientsAndServers/views/index.html"));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../clientsAndServers/views/about.html"));
})

app.get("/about-me", (req, res) =>  {
    res.redirect("/about")
})

// will only execute once code reaches this far
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "../clientsAndServers/views/404.html"));
})