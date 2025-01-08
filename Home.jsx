import { products } from "./Product";
import ProductCard from "./ProductCard";
import "./Style.css"

const Home = () => {
  return (
    <div className="home">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;