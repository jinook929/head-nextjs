import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Conatiner className="layout">
      <Header />
      {children}
      <Footer />
    </Conatiner>
  );
};

export default Layout;

const Conatiner = styled.section`
  margin: 0;
`;
