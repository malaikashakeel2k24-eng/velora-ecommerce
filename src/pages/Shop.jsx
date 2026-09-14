import { useCart } from "../components/CartContext";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

function Shop() {
  const { addToCart } = useCart();

  const products = [
    {
      name: "Velora Classic",
      category: "Signature Collection",
      price: "$89",
      image: product1,
    },
    {
      name: "Modern Form",
      category: "Essential Collection",
      price: "$119",
      image: product2,
    },
    {
      name: "Pure Edition",
      category: "Limited Collection",
      price: "$149",
      image: product3,
    },
    {
      name: "Luxe Essential",
      category: "Premium Collection",
      price: "$179",
      image: product4,
    },
  ];

  return (
    <main className="inner-page">
      <section className="page-hero">
        <p className="section-label">02 — SHOP</p>

        <h1>
          Explore our <span>essentials.</span>
        </h1>

        <p>
          Discover carefully curated pieces designed for modern everyday
          living.
        </p>
      </section>

      <section className="shop-page-grid">
        {products.map((product, index) => (
          <article className="shop-product" key={product.name}>
            <div className={`shop-product-image product-${index + 1}`}>
              <img src={product.image} alt={product.name} />

              <span>0{index + 1}</span>
            </div>

            <div className="shop-product-info">
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>

              <strong>{product.price}</strong>
            </div>

            <button
              className="product-btn"
              type="button"
              onClick={() => addToCart(product)}
            >
              Add to Collection
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Shop;