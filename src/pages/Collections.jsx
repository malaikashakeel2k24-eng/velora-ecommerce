function Collections() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <p className="section-label">03 — COLLECTIONS</p>
        <h1>Less noise. <span>More expression.</span></h1>
        <p>
          Explore collections created around modern living and effortless
          personal style.
        </p>
      </section>

      <section className="collections-grid">
        <article className="collection-card">
          <span>01</span>
          <h2>Signature</h2>
          <p>
            Our iconic collection featuring refined everyday essentials.
          </p>
          <a href="/shop">Explore →</a>
        </article>

        <article className="collection-card">
          <span>02</span>
          <h2>Essential</h2>
          <p>
            Minimal pieces designed to become part of your daily routine.
          </p>
          <a href="/shop">Explore →</a>
        </article>

        <article className="collection-card">
          <span>03</span>
          <h2>Limited</h2>
          <p>
            Exclusive designs created for those who appreciate something
            different.
          </p>
          <a href="/shop">Explore →</a>
        </article>
      </section>
    </main>
  );
}

export default Collections;