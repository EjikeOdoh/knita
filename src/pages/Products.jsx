import "./products.css";
import { useEffect } from "react";
import { categories } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//actions

import { getProducts as listProducts } from "../redux/actions/productActions";
import { ShoppingCart } from "@mui/icons-material";

const Products = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <header></header>
      <section className="categories">
        <h1>Browse by Category</h1>
        <div className="category-slide">
          <Swiper slidesPerView={4}>
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="category-card">
                  <img className="category-img" />
                  <p className="category-name">{category}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="drag-to-slide">Drag to slide left or right</p>
      </section>

      <section>
        <h1>Product Gallery</h1>
        <div className="products-gallery">
          {products.map((product, index) => (
            <article className="article" key={index}>
              <img src={product.image} />
              <div className="item-info">
                <div className="product-info">
                  <p className="product-name">
                    {product.title.substring(0, 30)}
                  </p>
                  <div className="price-info">
                    <p>$ {product.price}</p>
                    <small>3 Days Delivery</small>
                  </div>
                </div>
              </div>
              <div className="load-more">
                <Link to={`/products/${product.id}`} className="button">
                  <ShoppingCart />
                  <span>ADD TO CART</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
