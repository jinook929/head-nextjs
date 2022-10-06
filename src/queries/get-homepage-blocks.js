import { gql } from "@apollo/client";

export const GET_HOMEPAGE_BLOCKS = () => gql`
  query GetHomepageBlocks {
    pageBy(uri: "/homepage/") {
      blocks {
        name
        ... on CoreHeadingBlock {
          originalContent
        }
        ... on CoreParagraphBlock {
          originalContent
        }
        ... on CoreQuoteBlock {
          originalContent
        }
        ... on CoreImageBlock {
          attributesJSON
        }
        ... on AcfCardsBlock {
          dynamicContent
        }
        ... on AcfTestBlock {
          dynamicContent
        }
        ... on AcfImageBlock {
          dynamicContent
        }
      }
    }
  }
`;
