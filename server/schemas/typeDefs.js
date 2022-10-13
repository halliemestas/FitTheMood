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
    _id: ID
    duration: String!
    workout: String!
    summary: String
  }

  type Mood {
    _id: ID
    overall: Int!
    feelings: [String]!
    notes: String
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
    addWorkout(duration: String!, workout: String!, summary: String): User
    addMood(overall: Int!, feeling: String!, notes: String!): User
  }
`;

module.exports = typeDefs;
