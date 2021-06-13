const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("../handlers/errorHandlers");
const {
  getFriends,
  requestsReceived,
  requestsSent,
  sendRequest,
  acceptRequest,
  deleteFriend,
} = require("../controllers/friendsController");
router.get("/conversations/:userid", auth, catchErrors(getConversationFriends));
router.get("/:userid", auth, catchErrors(getFriends));
router.get("/received/:userid", auth, catchErrors(requestsReceived));
router.get("/sent/:userid", auth, catchErrors(requestsSent));
router.post("/request", auth, catchErrors(sendRequest));
router.put("/accept/:id", auth, catchErrors(acceptRequest));
router.delete("/delete/:id", auth, catchErrors(deleteFriend));

module.exports = router;
