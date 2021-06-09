const router = require("express").Router();

const { catchErrors } = require("../handlers/errorHandlers");
const groupController = require("../controllers/groupController");
const auth = require("../middlewares/auth");

router.get("/", catchErrors(groupController.getGroups));
router.post("/create", auth, catchErrors(groupController.createGroup));
router.get("/:id", catchErrors(groupController.findGroup));
router.delete("/delete/:id", catchErrors(groupController.deleteGroup));
router.get("/status/:id", catchErrors(groupController.status));
router.put("/update/:id", catchErrors(groupController.updateGroup));

module.exports = router;
