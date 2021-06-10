const jwt = require("jwt-then");
module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw 401;

    const token = req.headers.authorization.split(" ")[1];
    const payload = await jwt.verify(token, process.env.SECRET);
    req.payload = payload;
  } catch (err) {
    res.status(err).json({ message: "Unauthorized 👀" });
  }
  next();
};
