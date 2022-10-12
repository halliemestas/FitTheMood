const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedMoods` array in User.js
const moodSchema = new Schema({
  overall: [
    {
      type: int,
    },
  ],
  feeling: {
    
  },
  summary: {
    type: String,
  }
});

module.exports = moodSchema;
