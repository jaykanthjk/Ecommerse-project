import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./EcommerceProject/Navbar";
import Home from "./EcommerceProject/Home";
import ProductDetails from "./EcommerceProject/ProductDetails";
import Cart from "./EcommerceProject/Cart";
import { CartProvider } from "./EcommerceProject/CartContext";
import "./EcommerceProject/Style.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;