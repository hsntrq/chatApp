const router = require("express").Router();
let Group = require("../models/group.model");

// Get all groups
router.route("/").get((req, res) => {
  Group.find()
    .then((groups) => res.json(groups))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Create a new Group
router.route("/create").post((req, res) => {
  const newGroup = new Group({ name: req.body.name });
  newGroup
    .save()
    .then(() => res.json(" " + newGroup.name + " group created!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Find group by Id
router.route("/:id").get((req, res) => {
  Group.findById(req.params.id)
    .then((group) => res.json(group))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get status of the group is it active or deactivated
router.route("/status/:id").get((req, res) => {
  Group.findById(req.params.id)
    .then((group) => res.json(group.isActive))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete the group
router.route("/delete/:id").delete((req, res) => {
  Group.findByIdAndDelete(req.params.id)
    .then(() => res.json("Group deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Update Group Name and Status
router.put("/update/:id", (req, res) => {
  var updatedRecord = {
    name: req.body.name,
    imageIcon: req.body.imageIcon,
    isActive: req.body.isActive,
  };
  Group.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    (err, doc) => {
      if (!err) res.json("Group UPDATED.");
      else res.status(400).json("Error: " + err);
    }
  );
});

module.exports = router;
