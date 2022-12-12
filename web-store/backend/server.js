const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

const app = express();
const port = 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// mongoose.set("strictQuery", false);

// mongoose.connect("mongodb://localhost:27017/web_store");
// mongoose.connection.on("connected", () => console.log("Connected"));
// mongoose.connection.on("error", (err) =>
//   console.log("Connection failed with - ", err)
// );

app.use("/", routes);

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
