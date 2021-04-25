import React from "react";
import styled from "styled-components";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { db } from "../Firebase";

function CartItem({ id, title, image, price, quantity }) {
  let options = [];
  for (let i = 1; i < Math.max(quantity + 1, 20); i++) {
    options.push(<option value={i}>Qty: {i}</option>);
  }

  const changeQuantity = (newQuantity) => {
    db.collection("products")
      .doc(id)
      .update({
        quantity: parseInt(newQuantity),
      });
  };

  const deleteItem = () => {
    db.collection("products").doc(id).delete();
  };
  return (
    <Container>
      <CartItemImage src={image} />
      <CartItemDetail>
        <CartItemTitle>IPHONE PHONE</CartItemTitle>
        <CartItemBody>
          <CartItemPrice>{price}</CartItemPrice>
          <CartItemOption>
            <CartItemQuantity
              value={quantity}
              onChange={(e) => changeQuantity(e.target.value)}
            >
              {options}
            </CartItemQuantity>
            <RemoveShoppingCartIconContainer onClick={deleteItem} />
          </CartItemOption>
        </CartItemBody>
      </CartItemDetail>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  margin-left: 40px;
  margin-bottom: 40px;
  width: 700px;
  height: 200px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  box-shadow: 3px 3px 3px #888888;
  transition: 0.5s all ease-in-out;
  :hover {
    transform: scale(1.1);
    background-color: #3c3e42;
    color: #dddedf;
  }
`;

const CartItemImage = styled.img`
  height: 80%;
  width: 150px;
  object-fit: contain;
  margin: auto 10px;
  border-radius: 6px;
`;

const CartItemDetail = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CartItemTitle = styled.div`
  padding-top: 16px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Ubuntu", sans-serif;
  color: #757dcc;
`;

const CartItemBody = styled.div`
  width: 450px;
  display: flex;
  padding-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`;

const CartItemPrice = styled.div``;

const CartItemOption = styled.div`
  display: flex;
`;

const CartItemQuantity = styled.select`
  margin-right: 4px;
  border-radius: 7px;
  background-color: #f0f2f2;
  box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
  :focus {
    outline: none;
  }
`;

const RemoveShoppingCartIconContainer = styled(RemoveShoppingCartIcon)`
  background-color: #ec1919;
  border-radius: 2px;
  cursor: pointer;
  color: white;
`;
