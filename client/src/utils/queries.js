import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
    }
  }
`;
export const QUERY_ALL_USERS = gql`
  query allUsers {
    users {
      _id
      name
    }
  }
`;

export const QUERY_ONE_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      name
    }
  }
`;

export const QUERY_MOODS = gql`
  query getMoods {
    savedMoods {
      _id
      overall
      feeling
      notes
    }
  }
`;