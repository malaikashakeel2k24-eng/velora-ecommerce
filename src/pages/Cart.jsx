import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, product) => {
    return sum + Number(product.price.replace("$", ""));
  }, 0);

  return (
    <main className="inner-page">
      <section className="page-hero">
        <p className="section-label">05 — YOUR CART</p>

        <h1>
          Your <span>collection.</span>
        </h1>

        <p>
          Review the pieces you've selected before completing your purchase.
        </p>
      </section>

      <section className="cart-page">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your collection is empty.</h2>

            <p>Add something beautiful from our shop.</p>

            <Link to="/shop" className="primary-btn">
              Explore Shop →
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((product, index) => (
                <article
                  className="cart-item"
                  key={`${product.name}-${index}`}
                >
                  <div className="cart-item-image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  <div className="cart-item-info">
                    <p>{product.category}</p>

                    <h3>{product.name}</h3>

                    <strong>{product.price}</strong>
                  </div>

                  <button
                    className="remove-btn"
                    type="button"
                    onClick={() => removeFromCart(product.name)}
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>

            <div className="cart-summary">
              <p>ORDER SUMMARY</p>

              <div className="cart-total">
                <span>Total</span>

                <strong>${total}</strong>
              </div>

              <button
                className="primary-btn checkout-btn"
                type="button"
                onClick={() =>
                  alert("Checkout coming soon!")
                }
              >
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Cart;