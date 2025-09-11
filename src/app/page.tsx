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

      {/* winter */}
      <section className="container g1">
        <div className="img-wrapper winter1">
          <img src="part-3-1.webp" alt="" />
        </div>
        <div className="img-wrapper winter2">
          <img src="part-3-2.webp" alt="" />
        </div>
        <div className="img-wrapper winter3">
          <img src="part-3-3.webp" alt="" />
        </div>

        {/* title */}
        <h3>WINTER COLLECTION</h3>
        <section className="btn-paragraph">
          <p>
Photos are metaphors, making the abstract concrete and mystifying the mundane. Be clear, be confident, and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. 
          </p>
          <button>View full gallery</button>
        </section>
      </section>
      <section className="container g2"></section>
      <section className="container g3"></section>
    </section>
  );
}
