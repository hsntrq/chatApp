const router = require("express").Router();
let Friends = require("../models/friends.model");

const { catchErrors } = require("../handlers/errorHandlers");
const friendsController = require("../controllers/friendsController");
router.get("/:userid", catchErrors(friendsController.getFriends));
router.get(
  "/received/:userid",
  catchErrors(friendsController.requestsReceived)
);
router.get("/sent/:userid", catchErrors(friendsController.requestsSent));
router.post("/request", catchErrors(friendsController.sendRequest));
router.put("/accept/:id", catchErrors(friendsController.acceptRequest));
router.delete("/delete/:id", catchErrors(friendsController.deleteFriend));

module.exports = router;
// 200 okay
// 201 create (post req)
// 404 user doesnt exist not found
// 400 Bad request create user twice delete
// corner cases
// consistency
