import React from "react";
import styled from "styled-components";

function Menu() {
  return <Container>All Items</Container>;
}

export default Menu;

const Container = styled.div`
  font-weight: 800;
  font-family: "Playfair Display", serif;
  color: #a39e9e;
  font-size: 20px;
  :hover {
    color: black;
    border-bottom: 5px solid black;
    cursor: pointer;
  }
  :active {
    background-color: orange;
  }
`;
