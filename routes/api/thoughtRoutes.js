const router = require("express").Router();

// ROUTE: /api/thoughts

// 1) GET all thoughts

// 2) GET to get a single thought by its _id

// 3) POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// 4) PUT to update a thought by its _id

// 5) DELETE to remove a thought by its _id

// ROUTE:  /api/thoughts/:thoughtId/reactions

// 6) POST to create a reaction stored in a single thought's reactions array field

// 7) DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;
