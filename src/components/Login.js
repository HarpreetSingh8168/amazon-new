import React from "react";
import styled from "styled-components";
import { auth, provider } from "../Firebase";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        let user = res.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Container>
      <Content>
        <AmazonLogo src="http://pngimg.com/uploads/amazon/amazon_PNG6.png" />
        <DisplayText>Sign into Amazon</DisplayText>
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px gray;
  text-align: center;
`;

const AmazonLogo = styled.img`
  height: 100px;
  margin-bottom: 40px;
`;

const DisplayText = styled.h2``;

const LoginButton = styled.button`
  margin-top: 50px;
  background-color: #f0c14b;
  height: 40px;
  border: 2px solid #a88734;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  :hover{
    opacity:0.85;
  }
`;
