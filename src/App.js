import "./App.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { db } from "./Firebase";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState();
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("products").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);
  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header cartItems={cartItems} user={user} />
          <Switch>
            <Route path="/login"></Route>
            <Route path="/product/:productID">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
