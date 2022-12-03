const express = require("express");
const cors = require("cors");
const app = express();
const conn = require("./models/db");
const { json } = require("express");
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("THE API IS WORKING FINE AND THE AUTOMATION IS AWSOME");
});
app.post("/adduser", (req, res) => {
  const values = [req.body.firstName, req.body.lastName];
  conn.query(
    "INSERT INTO users (firstName, lastName) VALUES(?)",
    [values],
    function (err, data, fields) {
      if (err) return res.json({ message: err });
      res.status(201).json({
        status: "success",
        message: "User has been added Successfully",
      });
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
