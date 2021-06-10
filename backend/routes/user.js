const router = require("express").Router();
const auth = require("../middlewares/auth");

const { catchErrors } = require("../handlers/errorHandlers");
const usercontroller = require("../controllers/userController");
router.post("/register", catchErrors(usercontroller.register));
router.post("/login", catchErrors(usercontroller.login));
router.get("/", catchErrors(usercontroller.findAllUsers));
router.get("/:id", auth, catchErrors(usercontroller.findUserById));
router.get("/status/:id", auth, catchErrors(usercontroller.checkUserStatus));
router.delete("/delete/:id", catchErrors(usercontroller.deleteUser));
router.put("/update/:id", auth, catchErrors(usercontroller.updateUser));

module.exports = router;
