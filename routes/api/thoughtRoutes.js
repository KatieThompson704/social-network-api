const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  addReaction,
  removeReaction,
  deleteThought,
} = require("../../controllers/thoughtController");

// ROUTE: /api/thoughts

router.route("/").get(getThoughts).post(createThought);
// 1) GET all thoughts

// 2) GET to get a single thought by its _id
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);
// 3) POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// 4) PUT to update a thought by its _id

// 5) DELETE to remove a thought by its _id

// ROUTE:  /api/thoughts/:thoughtId/reactions

// 6) POST to create a reaction stored in a single thought's reactions array field

// 7) DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;
