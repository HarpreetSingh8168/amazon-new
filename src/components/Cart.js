import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart({ cartItems }) {
  let count = 0;
  let totalPrice = 0;
  const calAmount = () => {
    cartItems.forEach((item) => {
      count += item.product.quantity;
      totalPrice += item.product.quantity * item.product.price;
    });
  };
  calAmount();
  return (
    <Container>
      <CartContainer>
        <CartHeaderContainer>
          <Link to="/">
            <ArrowBackIconContainer fontSize="large" />
          </Link>
          <CartTitle>Cart</CartTitle>
        </CartHeaderContainer>
        <CartItemContainer>
          {cartItems.map((item) => (
            <CartItem
              id={item.id}
              image={item.product.image}
              title={item.product.name}
              price={item.product.price}
              quantity={item.product.quantity}
            />
          ))}
          {count === 0 && <CartEmpty>Empty hai</CartEmpty>}
        </CartItemContainer>
      </CartContainer>
      <CheckoutContainer>
        <CheckoutHeaderContainer>
          <CheckoutHeading>Checkout</CheckoutHeading>
          {totalPrice >= 20000 && (
            <CheckoutFreeDelivery>
              <CheckoutTickIcon />
              Your order is eligible for free delivery
            </CheckoutFreeDelivery>
          )}
        </CheckoutHeaderContainer>
        <CheckoutDetailContainer>
          <CheckoutDetailHeader>Sub-Total:{totalPrice}</CheckoutDetailHeader>
          <CheckOutQuantity>Total Quantiy of Items:{count}</CheckOutQuantity>
          <CheckOutParagraph>
            All the cost are inclusive of GST and all types of taxes
          </CheckOutParagraph>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </CheckoutDetailContainer>
      </CheckoutContainer>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-left: 160px;
  margin-top: 150px;
  align-items: flex-start;
`;

const CartContainer = styled.div``;

const CartHeaderContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ArrowBackIconContainer = styled(ArrowBackIcon)`\
margin-right:8px;
color:black;
padding-top:4px;
`;

const CartTitle = styled.div`
  font-family: "Kiwi Maru", serif;
  font-weight: 700;
  font-size: 35px;
`;

const CartItemContainer = styled.div``;

const CheckoutContainer = styled.div`
  position: fixed;
  margin-left: 820px;
  margin-top: 68px;
  background-color: white;
  width: 500px;
  box-shadow: 3px 3px 3px #888888;
  border-radius: 8px;
  padding-bottom: 40px;
  transition: 0.5 all ease-in-out;
  :hover {
    transform: scale(1.1);
    background-color: #3c3e42;
    color: #dddedf;
  }
`;

const CheckoutHeaderContainer = styled.div`
  padding: 15px;
  margin-bottom: 10px;
`;

const CheckoutHeading = styled.div`
  font-family: "Kiwi Maru", serif;
  font-weight: 500;
  font-size: 28px;
`;

const CheckoutFreeDelivery = styled.div`
  margin-top: 15px;
  height: 30px;
  background-color: #6bef88;
  border-radius: 7px;
  display: flex;
  align-items: center;
  color: #178830;
`;

const CheckoutTickIcon = styled(DoneAllIcon)`
  margin-right: 4px;
  padding-left: 4px;
`;
const CheckoutDetailContainer = styled.div`
  padding: 15px;
`;

const CheckoutDetailHeader = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-weight: 900;
  font-size: 25px;
  margin-bottom: 15px;
`;

const CheckOutQuantity = styled.div`
  margin-bottom: 15px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
`;

const CheckOutParagraph = styled.div`
  margin-bottom: 15px;
  color: #bdbdbc;
`;

const CheckoutButton = styled.button`
  height: 40px;
  padding: 20px;
  display: flex;
  color: white;
  font-family: "Rubik", sans-serif;
  align-items: center;
  border-radius: 7px;
  background-color: #e1ae0e;
  :hover {
    background-color: #ecb704;
    border-radius: 7px;
  }
  :focus {
    outline: none;
  }
  cursor: pointer;
`;

const CartEmpty = styled.div``;
