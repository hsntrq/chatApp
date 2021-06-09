const router = require("express").Router();

const { catchErrors } = require("../handlers/errorHandlers");
const userGroupController = require("../controllers/userGroupController");
router.get("/", catchErrors(userGroupController.getAll));
router.get("/:userid", catchErrors(userGroupController.memberOf));
router.get("/admin/:userid", catchErrors(userGroupController.isAdminOf));
router.post("/join", catchErrors(userGroupController.joinGroup));
router.delete("/exit/:id", catchErrors(userGroupController.exitGroup));

module.exports = router;
