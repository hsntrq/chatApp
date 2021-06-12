const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("../handlers/errorHandlers");
const {
  getAll,
  memberOf,
  isAdminOf,
  joinGroup,
  exitGroup,
} = require("../controllers/userGroupController");

router.get("/", catchErrors(getAll));
router.get("/:userid", auth, catchErrors(memberOf));
router.get("/admin/:userid", auth, catchErrors(isAdminOf));
router.post("/join", auth, catchErrors(joinGroup));
router.delete("/exit/:id", auth, catchErrors(exitGroup));

module.exports = router;
