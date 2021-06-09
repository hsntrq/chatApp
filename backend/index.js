const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE, {
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
const groupsRouter = require("./routes/group");
const groupMessageRouter = require("./routes/groupMessage");
const userGroupsRouter = require("./routes/userGroup");

app.use("/api/users", usersRouter);
app.use("/api/user-groups", userGroupsRouter);
app.use("/api/messages", messageRouter);
app.use("/api/connections", friendsRouter);
app.use("/api/groups", groupsRouter);
app.use("/api/group-messages", groupMessageRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
