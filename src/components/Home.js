import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Item from "./Item";
import Menu from "./Menu";
import { db } from "../Firebase";

function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      let tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProducts(tempProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Banner />
      <MenuContainer>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
      </MenuContainer>
      <ItemsContainer>
        {products.map((product) => (
          <Item
            id={product.id}
            title={product.product.name}
            price={product.product.price}
            rating={product.product.rating}
            images={product.product.image}
            description={product.product.description}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 94%;
  margin-top: 38px;
  padding-left: 80px;
`;

const MenuContainer = styled.div`
  margin-top: 70px;
  display: flex;
  width: 70%;
  height: 30px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemsContainer = styled.div`
  width: 72%;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
`;
