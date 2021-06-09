const router = require("express").Router();

const { catchErrors } = require("../handlers/errorHandlers");
const usercontroller = require("../controllers/userController");
router.post("/register", catchErrors(usercontroller.register));
router.post("/login", catchErrors(usercontroller.login));
router.get("/", catchErrors(usercontroller.findAllUsers));
router.get("/:id", catchErrors(usercontroller.findUserById));
router.get("/status/:id", catchErrors(usercontroller.checkUserStatus));
router.delete("/delete/:id", catchErrors(usercontroller.deleteUser));
router.put("/update/:id", catchErrors(usercontroller.updateUser));

module.exports = router;
