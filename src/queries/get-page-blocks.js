import { gql } from "@apollo/client";

export const GET_PAGE_BLOCKS = (slug) => gql`
  query GetBlocks {
    pageBy(uri: "/${slug === "homepage" ? null : slug + "/"}") {
      blocks {
        name
        ... on CoreHeadingBlock {
          originalContent
        }
        ... on CoreParagraphBlock {
          originalContent
        }
        ... on CoreImageBlock {
          attributesJSON
        }
        ... on CoreQuoteBlock {
          originalContent
        }
        ... on AcfCardsBlock {
          dynamicContent
        }
        ... on AcfTestBlock {
          dynamicContent
        }
      }
    }
  }
`;
