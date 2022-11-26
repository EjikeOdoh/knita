import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../components/Card";
import "./home.css";

import { useSelector, useDispatch } from "react-redux";

//actions

import { getProducts as listProducts } from "../redux/actions/productActions";
import { ShoppingCart } from "@mui/icons-material";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users?limit=10").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <header className="home-header">
        <div className="header-text padding">
          <h1>Get the best service and skill at one go.</h1>
          <h4>Right now. Right here</h4>
          <div className="header-btn">
            <Link to="/login" className="button">
              START NOW
            </Link>
            <Link to="/login" className="button">
              BECOME A VENDOR
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="top-products">
          <h1>Top Products</h1>
          <div className="top-products-list">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={6}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="swiper"
            >
              {products.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="swiperslide">
                    <Card
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      id={item.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
        <section className="business-section">
          <div className="business">
            <div className="business-text">
              <h3>Grow your business</h3>
              <h1>
                Trusted globally by over 1 million businesses, small to large
              </h1>
              <Link to="/login" className="button">
                START NOW FOR FREE
              </Link>
            </div>
            <div className="business-image">
              <img src="https://previews.123rf.com/images/assumption111/assumption1111904/assumption111190400044/120203942-smiling-african-american-black-woman-fashion-designer-near-mannequin-and-clothes-at-workshop-studio.jpg" />
            </div>
          </div>
        </section>
        <div className="freelancers-section">
          <div className="freelancers">
            <div className="freelancers-img">
              <img src="https://img.freepik.com/free-photo/inspired-african-student-glasses-holding-white-laptop-carefree-black-male-freelancer-smiling_197531-20160.jpg?w=900&t=st=1668609940~exp=1668610540~hmac=a2059db8dfb9a31439b657be338bbdeac85133f1615cdd69b1b769fdd9f1c442" />
            </div>
            <section className="wrapper">
              <h1>Freelancers</h1>
              <div className="freelancers-slide">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={15}
                  slidesPerView={4.5}
                  navigation
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="swiper"
                >
                  {users.map((user, index) => {
                    return (
                      <SwiperSlide key={index} className="swiperslide">
                        <Card
                          image={user.image}
                          title={user.username}
                          price={user.phone}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </section>
            <section className="freelancers-text">
              <div className="left"></div>
              <div className="right">
                <h5>Embrace the freelance revolution</h5>
                <p>
                  There's never been a better time to take yourself online and
                  start making money from your very own fine-tuned set of
                  skills.
                </p>
                <p>
                  Work wherever suits you, choose full-time, part-time or
                  flexi-time. On XXXXXX, you remain in control of everything —
                  including your price.
                </p>
                <Link className="button">JOIN AS A FREELANCER</Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
