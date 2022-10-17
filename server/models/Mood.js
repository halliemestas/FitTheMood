const { Schema } = require("mongoose");

const moodSchema = new Schema({
  // overall: {
  //   type: Number,
  //   required: true,
  // },

  // feeling: [
  //   {
  //     type: String,
  //   },
  // ],
  notes: {
    type: String,
    required: true,
  },
});

module.exports = moodSchema;
