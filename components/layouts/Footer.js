import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { useQuery } from "@apollo/client";
import { GET_FOOTER_MENU } from "../../src/queries/get-menus";

import Logo from "@/images/logo.png";

const Footer = () => {
  const { data, error, loading } = useQuery(GET_FOOTER_MENU());
  console.log("data ~~~>", data);
  const firstLevelMenus = data?.menu.menuItems.edges
    ?.filter((edge) => !edge.node.parentId)
    .map((el) => el.node);
  console.log("Logo", Logo);
  return (
    <FooterContainer>
      <LogoWrapper>
        <Image
          src={Logo.src}
          alt="logo"
          width={148}
          height={79}
          layout="responsive"
        />
      </LogoWrapper>
      <FooterContents>
        <FooterNav>
          {firstLevelMenus?.map((menuItem, i) =>
            i < 3 ? (
              <NavItemSet key={menuItem.id}>
                <NavItem
                  href={menuItem.path === "/homepage/" ? "/" : menuItem.path}
                >
                  <span>{menuItem.label}</span>
                </NavItem>
                {console.log("childItems", menuItem.childItems)}
                {menuItem.childItems.edges.length === 0 ? null : (
                  <SubMenu>
                    {menuItem.childItems.edges.map((subItem) => (
                      <span key={subItem.node.id}>{subItem.node.label}</span>
                    ))}
                  </SubMenu>
                )}
              </NavItemSet>
            ) : (
              i === firstLevelMenus.length - 1 ? 
              <NavItemSetNoSub key={menuItem.id}>
                {firstLevelMenus.map((menu, j) => j < 3 ? null : <NavItem
                  href={menu.path === "/homepage/" ? "/" : menu.path}
                >
                  <span>{menu.label}</span>
                </NavItem>)}
                
              </NavItemSetNoSub> : null
            )
          )}
        </FooterNav>
        <ConnectSection>Subscribe</ConnectSection>
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 85px;
  background-color: black;
  color: white;
  width: 100%;
`;

const LogoWrapper = styled.div`
  width: 148px;
  height: 78px;
  margin-bottom: 60px;
`;

const FooterContents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const FooterNav = styled.nav`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  justify-content: flex-start;
  align-items: center;
  column-gap: 2rem;
  row-gap: 1rem;
`;

const NavItemSet = styled.div`
  position: relative;
  align-self: flex-start;
`;

const NavItemSetNoSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 18px;
`;

const NavItem = styled.button`
  color: white;
  background-color: transparent;
  font-size: 28px;
  line-height: 1.25;
  border: none;
  text-decoration: underline;
  padding-left: 0;
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: underline;
  font-size: 20px;
  line-height: 1.5;
  margin-top: 8px;
`;

const ConnectSection = styled.div`
  color: white;
  font-size: 28px;
  line-height: 1.25;
`;
