const express = require("express");
const port = process.env.PORT || 8080
const path=require("path")

const app = express();
app.use(express.static("dist"))

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"))
})

app.get("/api", (req, res) => {
  res.send("working!");
});

app.listen(port, () =>
  console.log(`Listening on port ${port}!`)
);
