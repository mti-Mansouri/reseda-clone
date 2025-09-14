export default function ServicesPage() {
  return (
    <section className="services-page-container">
      <div className="service-container">
        <h4>Standard Package</h4>
        <p>$180.00</p>
        <img className="service-img" src="services1.webp" alt="" />
      </div>
      <div className="service-container">
        <h4>Deluxe Package</h4>
        <p>$250.00</p>
        <img className="service-img" src="services2.webp" alt="" />
      </div>
      <div className="service-container">
        <h4>Professional Package</h4>
        <p>$300.00</p>
        <img className="service-img" src="services3.webp" alt="" />
      </div>
      <div className="service-container">
        <h4>Elite Package</h4>
        <p>$500.00</p>
        <img className="service-img" src="services4.webp" alt="" />
      </div>
    </section>
  );
}
