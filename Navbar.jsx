import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Style.css"

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/cart" className="nav-link"> <i style={{fontSize:"25px"}} class="fa-solid fa-cart-shopping"></i> Cart ({cart.length})</Link>
    </nav>
  );
};

export default Navbar;
