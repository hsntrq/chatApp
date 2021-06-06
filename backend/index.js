const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/chatapp";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/user");
const messageRouter = require("./routes/message");
const friendsRouter = require("./routes/friends");

app.use("/api/user", usersRouter);
app.use("/api/message", messageRouter);
app.use("/api/connections", friendsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
