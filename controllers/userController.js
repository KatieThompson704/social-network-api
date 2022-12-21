const { User, Thought } = require("../models");

module.exports = {
  // Get ALL Users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  // Find One User by ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Invalid ID. No User found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new User
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
};
