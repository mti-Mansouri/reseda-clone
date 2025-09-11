import Image from "next/image";
import "@/app/mainPageStyles.css";
export default function Home() {
  return (
    <section className="main-page-container">
      {/* main */}
      <section className="container hero">
        <h1>Reseda</h1>
        <div className="hero-img-wrapper">
          <img src="part-1.webp" alt="" />
        </div>

        <h3>LA-based Photography by Sofia Parazi</h3>
        <section className="btn-paragraph">
          <p>
            Sofia Parazi is an LA based photographer, cinematographer and art
            director. Her juxtaposition between light and shadow punctuates her
            signature style. Sofia believes photos are metaphors, making the
            abstract concrete and mystifying the mundane.
          </p>
          <button>About Sofia</button>
        </section>
      </section>
      <section className="container services">
        <div className="img-wrapper">
          <img src="part-2.webp" alt="" />
        </div>
        <h3>photography services</h3>
        <section className="btn-paragraph">
          <p>
            Sofia offers professional photography for agencies and industry
            clients, with sessions built for wardrobe changes, multiple models,
            and custom retouching—perfect for campaigns, portfolios, and brand
            content.
          </p>
          <button>View services</button>
        </section>
      </section>
      <section className="container g1">
                <div className="img-wrapper">
          <img src="part-2.webp" alt="" />
        </div>
        <h3>photography services</h3>
        <section className="btn-paragraph">
          <p>
            Sofia offers professional photography for agencies and industry
            clients, with sessions built for wardrobe changes, multiple models,
            and custom retouching—perfect for campaigns, portfolios, and brand
            content.
          </p>
          <button>View services</button>
        </section>
      </section>
      <section className="container g2"></section>
      <section className="container g3"></section>
    </section>
  );
}
