// Import dependencies from Mongoose
const { Schema, model } = require("mongoose");

// Schema for User
const UserSchema = new Schema({
  // username,
  //email,
  //thoughts,
  //friends
});

// Virtual called 'friendCount' that retrieves the length of the user's friends array field on query

// Create the User model using the UserSchema
const User = model("User", UserSchema);

// Export the User module
module.exports = User;
