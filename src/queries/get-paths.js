import { gql } from "@apollo/client";

export const GET_PATHS = () => gql`
  query GetPaths {
    pages {
      edges {
        node {
          slug
          uri
        }
      }
    }
  }
`;

