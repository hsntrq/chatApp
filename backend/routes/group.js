const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const auth = require("../middlewares/auth");
const {
  getGroups,
  createGroup,
  findGroup,
  deleteGroup,
  status,
  updateGroup,
} = require("../controllers/groupController");

router.get("/", catchErrors(getGroups));
router.post("/create", auth, catchErrors(createGroup));
router.get("/:id", auth, catchErrors(findGroup));
router.delete("/delete/:id", auth, catchErrors(deleteGroup));
router.get("/status/:id", catchErrors(status));
router.put("/update/:id", auth, catchErrors(updateGroup));

module.exports = router;
