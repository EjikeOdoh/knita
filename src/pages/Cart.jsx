import "./cart.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { Delete } from "@mui/icons-material";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => item.qty + qty, 0);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((price, item) => item.qty * item.price + price, 0);
  };

  return (
    <section className="cart-screen">
      <div className="cart-items">
        {cartItems.map((item) => {
          return (
            <div className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} />
              </div>
              <div className="cart-item-title">{item.name}</div>
              <div className="cart-item-price">{item.price}</div>
              <div className="item-qty"></div>
              <Delete onClick={() => dispatch(removeFromCart(item.product))} />
            </div>
          );
        })}
      </div>
      <div className="cart-total">
        <p>Total items {getCartCount()}</p>
        <p>Total Amount: {getTotalAmount()}</p>
      </div>
    </section>
  );
};

export default Cart;
