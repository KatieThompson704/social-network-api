const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create Student model
const userSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      //   min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
    // TO DO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
