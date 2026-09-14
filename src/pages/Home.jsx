import { motion } from "framer-motion";

function Home() {
  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="hero-section">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">THE NEW STANDARD OF STYLE</p>

          <h1>
            Elevate Your
            <span> Everyday.</span>
          </h1>

          <p className="hero-text">
            Discover thoughtfully designed essentials created to bring
            timeless elegance, modern comfort, and effortless style into
            your everyday life.
          </p>

          <div className="hero-buttons">
            <a href="/shop" className="primary-btn">
              Explore Collection →
            </a>

            <a href="/about" className="secondary-btn">
              Discover Velora
            </a>
          </div>
        </motion.div>

        {/* 3D Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="glow"></div>

          <motion.div
            className="product-orb"
            animate={{
              rotate: 360,
              y: [0, -15, 0],
            }}
            transition={{
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="orb-shine"></div>
            <div className="orb-ring"></div>
          </motion.div>

          <div className="floating-card card-one">
            NEW
          </div>

          <div className="floating-card card-two">
            <strong>VELORA</strong>
            <small>EST. 2026</small>
          </div>
        </motion.div>

      </section>

      {/* Introduction */}
      <section className="home-intro">
        <p className="section-label">01 — VELORA</p>

        <h2>
          Modern essentials.
          <span> Timeless expression.</span>
        </h2>

        <p>
          Carefully designed pieces for people who appreciate simplicity,
          quality and sophisticated everyday style.
        </p>
      </section>

      {/* Featured Categories */}
      <section className="featured-section">

        <div className="section-heading">
          <div>
            <p className="section-label">02 — FEATURED</p>
            <h2>
              Curated <span>Essentials</span>
            </h2>
          </div>

          <a href="/shop" className="view-all">
            View Shop →
          </a>
        </div>

        <div className="featured-grid">

          <motion.article
            className="feature-card feature-one"
            whileHover={{ y: -10 }}
          >
            <div className="feature-number">01</div>
            <h3>Signature</h3>
            <p>Refined pieces designed for everyday confidence.</p>
          </motion.article>

          <motion.article
            className="feature-card feature-two"
            whileHover={{ y: -10 }}
          >
            <div className="feature-number">02</div>
            <h3>Essential</h3>
            <p>Minimal designs made for modern living.</p>
          </motion.article>

          <motion.article
            className="feature-card feature-three"
            whileHover={{ y: -10 }}
          >
            <div className="feature-number">03</div>
            <h3>Limited</h3>
            <p>Exclusive collections created in limited quantities.</p>
          </motion.article>

        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div>
          <p className="section-label">03 — DISCOVER</p>

          <h2>
            Less noise.
            <br />
            <span>More expression.</span>
          </h2>

          <p>
            Explore the Velora collection and discover a new approach
            to modern everyday style.
          </p>

          <a href="/collections" className="primary-btn">
            Explore Collections →
          </a>
        </div>
      </section>

    </main>
  );
}

export default Home;