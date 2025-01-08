import { useCart } from "./CartContext";
import './Style.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;