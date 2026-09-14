function About() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <p className="section-label">01 — ABOUT VELORA</p>
        <h1>Designed with <span>intention.</span></h1>
        <p>
          Velora is a modern lifestyle brand built around timeless design,
          thoughtful details, and everyday elegance.
        </p>
      </section>

      <section className="content-section">
        <h2>Our Philosophy</h2>
        <p>
          We believe great design should feel effortless. Every Velora
          collection combines refined aesthetics with practical everyday use.
        </p>

        <div className="info-grid">
          <div>
            <strong>01</strong>
            <h3>Quality</h3>
            <p>Thoughtfully selected materials and refined details.</p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Simplicity</h3>
            <p>Clean designs that remain timeless beyond trends.</p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Confidence</h3>
            <p>Essentials created to make everyday expression effortless.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;