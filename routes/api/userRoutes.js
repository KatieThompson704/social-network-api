const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController");

// ROUTE: /api/users

// 1) GET all users and 3)POST or Create a new User

router.route("/").get(getUsers).post(createUser);

// 2) GET a single user by its _id and populated thought and friend data

router.route("/:userId").get(getSingleUser);

// 1) GET all users

// 2) GET a single user by its _id and populated thought and friend data

// 3) POST a new user: // example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }

// 4) PUT to update a user by its _id

// 5) DELETE to remove user by its _id

// ROUTE:  /api/users/:userId/friends/:friendId

// 6) POST to add a new friend to a user's friend list

// 7) DELETE to remove a friend from a user's friend list

module.exports = router;
