import { gql } from "@apollo/client";

export const GET_HEADER_MENU = () => gql`
  query GetHeaderMenuQuery {
    menu(id: "header-menu", idType: SLUG) {
      name
      menuItems {
        edges {
          node {
            label
            id
            path
            url
            parentId
          }
        }
      }
    }
  }
`;

export const GET_FOOTER_MENU = () => gql`
  query GetHeaderMenuQuery {
    menu(id: "footer-menu", idType: SLUG) {
      name
      menuItems(first: 100) {
        edges {
          node {
            label
            id
            path
            url
            parentId
            childItems {
              edges {
                node {
                  label
                  id
                  path
                  url
                  parentId
                }
              }
            }
          }
        }
      }
    }
  }
`;
