import "./product.css";

import { Link, useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const Product = () => {
  const params = useParams().id;
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && params !== product.id) {
      dispatch(getProductDetails(params));
    }
  }, [dispatch, params]);

  const addToCartHandler = () => {
    dispatch(addToCart(product.id, qty));
    navigate("/cart");
  };

  return (
    <section className="product">
      <div className="product-image">
        <img src={product.image} />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>$ {product.price}</p>

        <div className="qty-details">
          <button className="button" onClick={addToCartHandler}>
            Add to cart
          </button>
          <select onChange={(e) => setQty(Number(e.target.value))}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Product;
