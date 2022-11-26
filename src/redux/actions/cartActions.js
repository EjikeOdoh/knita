import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data.id,
      name: data.title,
      price: data.price,
      desc: data.description,
      image: data.image,
      qty: qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

//id
//title
//price
//category
//description
//image
