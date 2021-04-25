import React from "react";
import styled from "styled-components";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header({ cartItems, user }) {
  let count = 0;
  const getCount = () => {
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });
  };
  getCount();
  return (
    <Container>
      <Link to="/">
        <HeaderLogo src="https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg" />
      </Link>
      <HeaderOption>
        <Link to="/">
          <HomeIconContainer fontSize="large" />
        </Link>
        <Link to="/cart">
          <ShoppingBasketOutlinedIconContainer>
            {count > 0 && <ShoppingBasketCount>{count}</ShoppingBasketCount>}
            <ShoppingBasketOutlinedIcon fontSize="large" />
          </ShoppingBasketOutlinedIconContainer>
        </Link>
        <SearchIconContainer>
          <SearchIcon fontSize="large" />
        </SearchIconContainer>
        <NotificationsOutlinedIconContainer>
          <NotificationsOutlinedIcon fontSize="large" />
        </NotificationsOutlinedIconContainer>
      </HeaderOption>
      <LoginContainer>
        <LoginPicture
          src={
            user
              ? user.photo
              : "https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg"
          }
        />
      </LoginContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  position: fixed;
  width: 6%;
  height: 100vh;
  background-color: white;
  box-shadow: 0 6px 3px gray;
  min-width:60px;
  a{
    text-decoration:none;
  }
`;

const HeaderLogo = styled.img`
  height: 50px;
  margin-top: 40px;
  cursor: pointer;
  width:100%;
`;

const HeaderOption = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  object-fit: contain;
  padding-bottom: 30px;
  cursor: pointer;
  width:100%;
`;
const LoginPicture = styled.img`
  height: 65px;
  border-radius: 50%;
  width:70%;
`;

const HomeIconContainer = styled(HomeOutlinedIcon)`
  color: black;
  cursor: pointer;
`;

const ShoppingBasketCount = styled.div`
  height: 19px;
  width: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec1919;
  border-radius: 50%;
  font-weight: 600;
  color: white;
`;
const ShoppingBasketOutlinedIconContainer = styled.div`
  cursor: pointer;
  color: black;
`;

const SearchIconContainer = styled.div`
  cursor: pointer;
`;

const NotificationsOutlinedIconContainer = styled.div`
  cursor: pointer;
`;
