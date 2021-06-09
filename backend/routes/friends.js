const router = require("express").Router();
let Friends = require("../models/friends.model");

const { catchErrors } = require("../handlers/errorHandlers");
const friendsController = require("../controllers/friendsController");
router.get("/:userid", catchErrors(friendsController.getFriends));
router.get(
  "/requests/received/:userid",
  catchErrors(friendsController.requestsReceived)
);
router.get(
  "/requests/sent/:userid",
  catchErrors(friendsController.requestsSent)
);
router.post("/request", catchErrors(friendsController.sendRequest));
router.put("/accept/:id", catchErrors(friendsController.acceptRequest));
router.delete("/delete/:id", catchErrors(friendsController.deleteFriend));

module.exports = router;
