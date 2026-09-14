import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        VELORA<span>.</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-actions">
        <Link to="/cart" className="nav-cart">
          Cart <span>{cart.length}</span>
        </Link>

        <Link to="/shop" className="nav-cta">
          Shop Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;