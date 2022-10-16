import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// export const ADD_WORKOUT = gql`
//   mutation addWorkout($userId: ID!, $workout: String!) {
//     addWorkout(userId: $userId, workout: $workout) {
//       _id
//       username
//       savedWorkouts
//     }
//   }
// `;

// export const ADD_MOOD = gql`
//   mutation addMood($userId: ID!, $workout: String!) {
//     addMood(userId: $userId, workout: $workout) {
//       _id
//       username
//       savedMoods
//     }
//   }
// `;
