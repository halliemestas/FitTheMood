const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Mood.js

const moodSchema = require("./Mood");

// import schema from Workout.js
const workoutSchema = require("./Workout");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // set savedMoods to be an array of data that adheres to the moodSchema
    savedMoods: [moodSchema],
    // set savedWorkouts to be an array of data that adheres to the workoutSchema
    savedWorkouts: [workoutSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
