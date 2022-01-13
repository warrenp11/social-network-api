// Import dependencies from Mongoose
const { Schema, model } = require("mongoose");

// Schema for User
const UserSchema = new Schema(
  {
    // username,
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    //email,
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    //thoughts,
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    //friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual called 'friendCount' that retrieves the length of the user's friends array field on query
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the User model using the UserSchema
const User = model("User", UserSchema);

// Export the User module
module.exports = User;
