const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    password: String!
    savedMoods: Mood
    savedWorkouts: Workout
  }

  type Workout {
    _id: ID
    duration: String!
    workout: String!
    summary: String
  }

  type Mood {
    _id: ID
    overall: Int!
    feeling: [String!]
    notes: String
  }
`;

module.exports = typeDefs;
