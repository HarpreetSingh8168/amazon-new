import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Rating from "@material-ui/lab/Rating";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";

function Product() {
  let { productID } = useParams();
  const [product, setProduct] = useState();
  const getProduct = () => {
    db.collection("cartItems")
      .doc(productID)
      .onSnapshot((snapshot) => {
        setProduct(snapshot.data());
      });
  };
  const [images, setImages] = useState(product && product.image[0]);
  useEffect(() => {
    getProduct();
  });

  const addToCart = () => {
    const cartItem = db.collection("products").doc(productID);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("products").doc(productID).set({
          name: product.name,
          image: product.image[0],
          price: product.price,
          quantity: 1,
        });
      }
    });
  };
  return (
    <Container>
      <ProductContainer>
        <ProductImage>
          <MainProductImage src={images || (product && product.image[0])} />
          <AllProductImagesContainer>
            <AllProductImages
              src={product && product.image[0]}
              onClick={(e) => {
                setImages(e.target.src);
              }}
              onPointerEnter={(e) => {
                setImages(e.target.src);
              }}
            />
            <AllProductImages
              src={product && product.image[1]}
              onClick={(e) => {
                setImages(e.target.src);
              }}
              onPointerEnter={(e) => {
                setImages(e.target.src);
              }}
            />
            <AllProductImages
              src={product && product.image[2]}
              onClick={(e) => {
                setImages(e.target.src);
              }}
              onPointerEnter={(e) => {
                setImages(e.target.src);
              }}
            />
            <AllProductImages
              src={product && product.image[3]}
              onClick={(e) => {
                setImages(e.target.src);
              }}
              onPointerEnter={(e) => {
                setImages(e.target.src);
              }}
            />
          </AllProductImagesContainer>
        </ProductImage>
        <ProductDetail>
          <ProductRating>
            <Rating
              name="half-rating-read"
              defaultValue={4.3}
              precision={0.5}
              readOnly
            />
          </ProductRating>
          <ProductTitle>{product && product.name}</ProductTitle>
          <ProductDescription>
            {product && product.description}
          </ProductDescription>
          <ProductOptions>
            <PropertyName>Color</PropertyName>
            <PropertyOptions>
              <Property>Red</Property>
              <Property>Green</Property>
              <Property>Orange</Property>
            </PropertyOptions>
          </ProductOptions>
          <ProductPrice>${product && product.price}</ProductPrice>
          <ProductSelectButtonContainer>
            <AddToBasketButton onClick={addToCart}>
              ADD TO BASKET
            </AddToBasketButton>
            <FavoriteBorderIconContainer>
              <FavoriteBorderIcon fontSize="large" />
            </FavoriteBorderIconContainer>
          </ProductSelectButtonContainer>
        </ProductDetail>
      </ProductContainer>
      <RatingReviewContainer>
        <RatingHeader>
          <RatingElement>
            <RatingDisplay>{product && product.rating}</RatingDisplay>
            <RatingStars>
              <Rating
                name="half-rating-read"
                defaultValue={product && product.rating}
                precision={0.5}
              />
            </RatingStars>
            <ReviewDisplay>138 Reviews</ReviewDisplay>
          </RatingElement>
          <RatingDetails>
            <RatingIndividual>
              <StarOutlineIcon />5
              <RatingColor style={{ backgroundColor: "#36BA0A" }}></RatingColor>
            </RatingIndividual>
            <RatingIndividual>
              <StarOutlineIcon />4
              <RatingColor style={{ backgroundColor: "#8DE620" }}></RatingColor>
            </RatingIndividual>
            <RatingIndividual>
              <StarOutlineIcon />3
              <RatingColor style={{ backgroundColor: "#E6F134" }}></RatingColor>
            </RatingIndividual>
            <RatingIndividual>
              <StarOutlineIcon />2
              <RatingColor style={{ backgroundColor: "#F79508" }}></RatingColor>
            </RatingIndividual>
            <RatingIndividual>
              <StarOutlineIcon />1
              <RatingColor style={{ backgroundColor: "#F64821" }}></RatingColor>
            </RatingIndividual>
          </RatingDetails>
        </RatingHeader>
      </RatingReviewContainer>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  margin-left: 100px;
`;
const ProductContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  @media only screen and (max-width:992px){
    flex-direction:column;
    align-items:center;
  }
`;

const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
`;

const MainProductImage = styled.img`
  width: 100%;
  height: 80%;
  max-height: 700px;
  object-fit: contain;
  z-index: 100;
  transition: 0.5s all ease-in-out;
  :hover {
    margin-top: 52px;
    transform: scale(1.2);
  }
`;

const AllProductImagesContainer = styled.div`
  height: 20%;
  display: flex;
  flex-wrap: wrap;
`;

const AllProductImages = styled.img`
  flex: 0 12%;
  height: 70%;
  margin: auto;
  cursor: pointer;
  border-radius: 8px;
  :hover {
    box-shadow: 3px 3px 3px gray;
  }
  object-fit: contain;
`;

const ProductDetail = styled.div`
  width: 38%;

  margin: 0 auto;
`;

const ProductRating = styled.div`
  margin-top: 20px;
  z-index: -1;
`;

const ProductTitle = styled.div`
  margin-top: 20px;
  font-family: "Dela Gothic One", cursive;
  font-size: 30px;
`;

const ProductDescription = styled.div`
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  margin-top: 20px;
`;

const ProductOptions = styled.div`
  margin-top: 20px;
`;

const PropertyName = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  font-size: 20px;
`;

const PropertyOptions = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  height: 70px;
`;

const Property = styled.div`
  height: 50px;
  width: 50px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 10px;
  font-weight: 500;
  border: 1px solid black;
  :hover {
    border: 3px solid #0a40b5;
    color: #0a40b5;
  }
  cursor: pointer;
`;

const ProductPrice = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-weight: 1000;
  font-size: 35px;
  margin-top: 20px;
`;

const ProductSelectButtonContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;

const AddToBasketButton = styled.button`
  background-color: #405eff;
  height: 40px;
  padding: 25px;
  padding-left: 70px;
  padding-right: 70px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 550;
  :hover {
    background-color: #1d58ec;
  }
  cursor: pointer;
`;

const FavoriteBorderIconContainer = styled.div`
  background-color: #ff7b4a;
  height: 54px;
  width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
  cursor: pointer;
  color: white;
  :hover {
    background-color: #eb6736;
  }
`;

const RatingReviewContainer = styled.div`
  background-color: #3c3e42;
  color: #eaeded;
`;

const RatingHeader = styled.div`
  width: 100%;
  display: flex;
  height: 300px;
  border-bottom: 1px solid black;
`;

const RatingElement = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
`;

const RatingDisplay = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-weight: 1000;
  font-size: 70px;
  margin-bottom: 20px;
`;

const RatingStars = styled.div`
  margin-bottom: 10px;
`;

const ReviewDisplay = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  border-bottom: 3px solid black;
`;

const RatingDetails = styled.div`
  width: 62%;
  height: 240px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RatingIndividual = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const RatingColor = styled.div`
  margin-left: 15px;
  width: 400px;
  height: 24px;
  border-radius: 4px;
`;
