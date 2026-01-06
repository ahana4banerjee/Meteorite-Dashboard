import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    userDbs {
      documentId
      Name
      email
      phone
      is_active
      DOB
    }
  }
`;
