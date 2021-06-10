const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("../handlers/errorHandlers");
const userGroupController = require("../controllers/userGroupController");
router.get("/", catchErrors(userGroupController.getAll));
router.get("/:userid", auth, catchErrors(userGroupController.memberOf));
router.get("/admin/:userid", auth, catchErrors(userGroupController.isAdminOf));
router.post("/join", auth, catchErrors(userGroupController.joinGroup));
router.delete("/exit/:id", auth, catchErrors(userGroupController.exitGroup));

module.exports = router;
