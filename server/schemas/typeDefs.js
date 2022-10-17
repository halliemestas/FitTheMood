const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    password: String!
    savedMoods: [Mood]
    savedWorkouts: [Workout]
  }

  type Workout {
    workoutId: String!
    duration: String!
    workout: String!
    summary: String
  }

  type Mood {
    notes: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addWorkout(workoutId: String!, duration: String!, workout: String!): User
    addMood(notes: String!): User
  }
`;

module.exports = typeDefs;

// addWorkout(duration: String!, workout: String!, summary: String): User
// addMood(overall: Int!, feeling: String!, notes: String!): User
