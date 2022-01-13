// Import dependencies from Mongoose
const { Schema, model, Types } = require("mongoose");

// require dateFormat
// const dateFormat = require("../utils/dateFormat");

// Schema for Reactions
const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    //   get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// // Schema for Thought
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    // associate reactions with Thought, use ReactionSchema to validate data for a reaction
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// // Virtual "reactionCount"
ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });

// // Create the Thought model using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

// // Export the Thought module
module.exports = Thought;
