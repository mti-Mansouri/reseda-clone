export default function LoadingPage() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          paddingTop: "80px",
        }}
        className="service-container"
      >
        <h4 className="skeleton-ui">item name</h4>
        <p
          style={{
            marginTop: "10px",
          }}
          className="skeleton-ui"
        >
          $ price
        </p>
        <div className="service-img skeleton-ui"></div>

        <div
          style={{
            gridArea: "ul",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className="skeleton-ui"
            style={{ height: "16px", width: "90%", marginBottom: "10px" }}
          ></div>
          <div
            className="skeleton-ui"
            style={{ height: "16px", width: "100%", marginBottom: "10px" }}
          ></div>
          <div
            className="skeleton-ui"
            style={{ height: "16px", width: "70%" }}
          ></div>
        </div>

        <div className="act">
          <button className="light-button skeleton-ui"></button>
        </div>
      </section>
    </section>
  );
}
