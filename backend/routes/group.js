const router = require("express").Router();
let Group = require("../models/group.model");

const { catchErrors } = require("../handlers/errorHandlers");
const groupController = require("../controllers/userController");
router.get("/", catchErrors(groupController.getGroups));
router.post("/create", catchErrors(groupController.createGroup));
router.get("/:id", catchErrors(groupController.findGroup));
router.delete("/delete/:id", catchErrors(groupController.deleteGroup));
router.get("/status/:id", catchErrors(groupController.status));
router.get("/update/:id", catchErrors(groupController.updateGroup));

export default router;
