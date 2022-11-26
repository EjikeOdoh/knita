import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ image, title, price, id }) => {
  return (
    <article className="card">
      <img className="image" src={image} />
      <p className="product-title">{title}</p>
      <p>$ {price}</p>
      <Link to={`/products/${id}`} className="button">
        ADD TO CART
      </Link>
    </article>
  );
};

export default Card;
