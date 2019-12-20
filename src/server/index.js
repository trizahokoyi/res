const express = require("express");
const port = process.env.PORT || 8080

const app = express();

app.use("/api", (req, res) => {
  res.send("working!");
});

app.listen(port, () =>
  console.log(`Listening on port ${port}!`)
);
