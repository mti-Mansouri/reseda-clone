import Image from "next/image";
import "@/app/mainPageStyles.css";
export default function Home() {
  return (
    <section className="main-page-container">
      {/* main */}
      <section className="container hero">
        <h1 className="logo-txt">Reseda</h1>
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
            Photos are metaphors, making the abstract concrete and mystifying
            the mundane. Be clear, be confident, and don’t overthink it. The
            beauty of your story is that it’s going to continue to evolve and
            your site can evolve with it. Your goal should be to make it feel
            right for right now. Later will take care of itself.
          </p>
          <button>View full gallery</button>
        </section>
      </section>
      <section className="container g2">
        <div className="img-wrapper fall1">
          <img src="part-4-1.webp" alt="" />
        </div>
        <div className="img-wrapper fall2">
          <img src="part-4-2.webp" alt="" />
        </div>
        <div className="img-wrapper fall3">
          <img src="part-4-3.webp" alt="" />
        </div>
        <section className="fall-last-imgs">
          <div className="img-wrapper fall4">
            <img src="part-4-4.webp" alt="" />
          </div>
          <div className="img-wrapper fall5">
            <img src="part-4-5.webp" alt="" />
          </div>
        </section>

        {/* title */}
        <h3>FALL COLLECTION</h3>
        <section className="btn-paragraph">
          <p>
            Photos are metaphors, making the abstract concrete and mystifying
            the mundane. Be clear, be confident, and don’t overthink it. The
            beauty of your story is that it’s going to continue to evolve and
            your site can evolve with it. Your goal should be to make it feel
            right for right now. Later will take care of itself.
          </p>
          <button>View full gallery</button>
        </section>
      </section>
      <section className="container g3">
        <div className="img-wrapper lift1">
          <img src="part-5-1.webp" alt="" />
        </div>
        <div className="img-wrapper lift2">
          <img src="part-5-2.webp" alt="" />
        </div>
        <div className="img-wrapper lift3">
          <img src="part-5-4.webp" alt="" />
        </div>
        <div className="img-wrapper lift4">
          <img src="part-5-3.webp" alt="" />
        </div>

        {/* title */}
        <h3>STILL LIFE COLLECTION</h3>
        <section className="btn-paragraph">
          <p>
            Photos are metaphors, making the abstract concrete and mystifying
            the mundane. Be clear, be confident, and don’t overthink it. The
            beauty of your story is that it’s going to continue to evolve and
            your site can evolve with it. Your goal should be to make it feel
            right for right now. Later will take care of itself.
          </p>
          <button>View full gallery</button>
        </section>
      </section>
    </section>
  );
}
