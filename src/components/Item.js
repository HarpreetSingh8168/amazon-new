import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { db } from "../Firebase";
import { useHistory } from "react-router-dom";

function Item({ id, title, price, rating, images, description }) {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const goToChannel = (id) => {
    if (id) {
      history.push(`/product/${id}`);
    }
  };
  const addToCart = () => {
    const cartItem = db.collection("products").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("products").doc(id).set({
          name: title,
          image: images[0],
          price: price,
          quantity: 1,
        });
      }
      setOpen(true);
    });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickway") {
      return;
    }
    setOpen(false);
  };

  const deleteItem = () => {
    db.collection("products").doc(id).delete();
    setOpen(false);
  };
  return (
    <Container>
      <DetailContainer>
        <ItemImage onClick={() => goToChannel(id)} src={images[0]} />
        <Title>Title</Title>
        <Price>{price}</Price>
        <Rating>{rating}</Rating>
      </DetailContainer>
      <AddToButton onClick={addToCart}>Add to Cart</AddToButton>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Added to Cart"
        action={
          <>
            <Button color="secondary" size="small" onClick={deleteItem}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </Container>
  );
}

export default Item;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 45%;
  margin: 19px 1.513%;
  background-color: white;
  height: 450px;
  border-radius: 9px;
  object-fit: cover;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 3px 3px gray;
`;

const DetailContainer = styled.div`
width:100%;
height:80%;
display:flex;
flex-direction:column;
justify-content:space-around;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  margin: 0px auto;
  object-fit: contain;
  border-radius: 9px 9px 0 0;
  cursor: pointer;
`;

const Title = styled.h2`
  color: #757dcc;
  font-family: "Ubuntu", sans-serif;
`;

const Price = styled.div``;

const Rating = styled.div``;

const AddToButton = styled.button`
  height: 40px;
  width: 50%;
  border-radius: 4px;
  background-color: #e1ae0e;
  :hover {
    background-color: #ecb704;
  }
  :focus {
    outline: none;
  }
  cursor: pointer;
`;
