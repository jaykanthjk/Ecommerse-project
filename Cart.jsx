import { useCart } from "./CartContext";
import './Style.css'

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <p className="empty">Your cart is empty</p>;

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)} className="remove-from-cart">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;