import Link from "next/link";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_HEADER_MENU } from "../../src/queries/get-menus";

const Header = () => {
  const { data, error, loading } = useQuery(GET_HEADER_MENU());
  return (
    <header>
      <HeaderNav>
        {data?.menu.menuItems.edges.map((menuItem) => (
          <Link
            key={menuItem.node.id}
            href={
              menuItem.node.path === "/homepage/" ? "/" : menuItem.node.path
            }
          >
            <a>
              <span>{menuItem.node.label}</span>
            </a>
          </Link>
        ))}
      </HeaderNav>
    </header>
  );
};

export default Header;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
`;
