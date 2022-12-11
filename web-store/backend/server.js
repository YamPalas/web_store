const express = require("express");
const { default: mongoose } = require("mongoose");
const routes = require("./routes");

const app = express();
const port = 5001;
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/web_store");
mongoose.connection.on("connected", () => console.log("Connected"));
mongoose.connection.on("error", (err) =>
  console.log("Connection failed with - ", err)
);

app.use("/api", routes);

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
