import { gql } from "@apollo/client";

export const GET_CUSTOM_BLOCKS = () => gql`
  query GetCustomBlocksQuery {
    pages {
      edges {
        node {
          pageId
          title
          uri
          blocks {
            name
            ... on AcfTestBlock {
              dynamicContent
              attributesJSON
            }
            ... on AcfCardsBlock {
              attributesJSON
              dynamicContent
            }
          }
        }
      }
    }
  }
`;
