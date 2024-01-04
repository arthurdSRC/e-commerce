import { FaShoppingCart } from "react-icons/fa";
import "./Product.scss"

export const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product-infos">

        <p className="info-title">{title}</p>
        <p className="info-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={image} className="product-img" />
      <button className="add-cart">Add to Cart <FaShoppingCart size={18} /></button>
    </div>
  )
}
