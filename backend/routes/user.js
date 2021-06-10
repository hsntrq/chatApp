const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("../handlers/errorHandlers");
const {
  register,
  login,
  findAllUsers,
  findUserById,
  deleteUser,
  updateUser,
  checkUserStatus,
} = require("../controllers/userController");

router.post("/register", catchErrors(register));
router.post("/login", catchErrors(login));
router.get("/", catchErrors(findAllUsers));
router.get("/:id", auth, catchErrors(findUserById));
router.get("/status/:id", auth, catchErrors(checkUserStatus));
router.delete("/delete/:id", catchErrors(deleteUser));
router.put("/update/:id", auth, catchErrors(updateUser));

module.exports = router;
