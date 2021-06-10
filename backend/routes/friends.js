const router = require("express").Router();
const auth = require("../middlewares/auth");

const { catchErrors } = require("../handlers/errorHandlers");
const friendsController = require("../controllers/friendsController");
router.get("/:userid", auth, catchErrors(friendsController.getFriends));
router.get(
  "/received/:userid",
  auth,
  catchErrors(friendsController.requestsReceived)
);
router.get("/sent/:userid", auth, catchErrors(friendsController.requestsSent));
router.post("/request", auth, catchErrors(friendsController.sendRequest));
router.put("/accept/:id", auth, catchErrors(friendsController.acceptRequest));
router.delete("/delete/:id", auth, catchErrors(friendsController.deleteFriend));

module.exports = router;
// 200 okay
// 201 create (post req)
// 404 user doesnt exist not found
// 400 Bad request create user twice delete
// corner cases
// consistency
