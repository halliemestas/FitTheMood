const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
      //somehow we need to have this return a token and use when we are saving a mood or a workout...
    },
    me: async (parent, args, context) => {
      console.log(context, "test");
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("savedMoods")
          .populate("savedWorkouts")
          .select("-__v -password");
      }
      // throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user with this username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);

      return { token, user };
    },
    addWorkout: async (
      parent,
      { userId, duration, workout, summary },
      context
    ) => {
      console.log(context.user, "1");
      console.log(duration, "2");
      console.log(workout, "3");
      console.log(summary, "4");

      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: userId },
          {
            $push: {
              savedWorkouts: {
                duration: duration,
                workout: workout,
                summary: summary,
              },
            },
          },
          { new: true, runValidators: true }
        );
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addMood: async (parent, { userId, overall, feeling, notes }, context) => {
      console.log(context.user, "5");
      console.log(overall, "6");
      console.log(feeling, "7");
      console.log(notes, "8");

      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: userId },
          {
            $push: {
              savedMoods: {
                overall: overall,
                feelings: feelings,
                notes: notes,
              },
            },
          },
          { new: true, runValidators: true }
        );
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
