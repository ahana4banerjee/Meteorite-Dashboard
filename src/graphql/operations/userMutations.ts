import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($Name: String!, $email: String!, $phone: Int!) {
    createUserDb(data: { Name: $Name, email: $email, phone: $phone, is_active: true }) {
      documentId
      Name
      email
      phone
      is_active
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($documentId: ID!, $Name: String!, $email: String!) {
    updateUserDb(documentId: $documentId, data: { Name: $Name, email: $email }) {
      documentId
      Name
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($documentId: ID!) {
    deleteUserDb(documentId: $documentId) {
      documentId
    }
  }
`;
