import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

export const dynamic = "force-dynamic";
export default async function ServicesPage() {
  const cookieStore = await cookies();
  // const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data: service, error } = await supabase.from("services").select("*");
  if (error) {
    console.error("error in fetching data from from db", error);
  }

  return (
    <section className="services-page-container">
      {service?.map((item) => (
        <section key={item.id} className="service-container">
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <div className="service-img">
            <Image
              alt={item.name}
              src={item.image_url}
              // width={}
              fill
            ></Image>
          </div>
          <ul>
            {item.features.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="act">
            <input type="number" />
            <button className="light-button">Purchase package</button>
          </div>
        </section>
      ))}

      {/* <div className="service-container">
        <h4>Standard Package</h4>
        <p>$180.00</p>
        <img className="service-img" src="services1.webp" alt="" />
        <ul>
          <li>1 hour session</li>
          <li>1 wardrobe</li>
          <li>Color grading + retouching</li>
          <li>
            A private online gallery with 18+ digital images delivered 3-5 weeks
            from the session
          </li>
          <li>
            Ideal for headshots, portraits, personal branding, or a quick
            refresh for your online presence
          </li>
        </ul>
        <div className="act">
          <input type="number" />
          <button className="light-button">Purchase package</button>
        </div>
      </div>

      <div className="service-container">
        <h4>Deluxe Package</h4>
        <p>$250.00</p>
        <img className="service-img" src="services2.webp" alt="" />
        <ul>
          <li>2 hour session</li>
          <li>1-2 wardrobe changes</li>
          <li>Color grading + retouching</li>
          <li>
            A private online gallery with 18+ digital images delivered 3-5 weeks
            from the session
          </li>
          <li>
            Best for client go-sees, online portfolio, social media, special
            occasions (birthdays, anniversaries)
          </li>
        </ul>
        <div className="act">
          <input type="number" />
          <button className="light-button">Purchase package</button>
        </div>
      </div>
      <div className="service-container">
        <h4>Professional Package</h4>
        <p>$300.00</p>
        <img className="service-img" src="services3.webp" alt="" />
        <ul>
          <li>3 hour session</li>
          <li>3 wardrobe changes</li>
          <li>Color grading + retouching</li>
          <li>Multiple models</li>
          <li>
            A private online gallery with 24+ digital images delivered 4-6 weeks
            from the session
          </li>
          <li>Best for indie agencies and print campaigns</li>
        </ul>
        <div className="act">
          <input type="number" />
          <button className="light-button">Purchase package</button>
        </div>
      </div>

      <div className="service-container">
        <h4>Elite Package</h4>
        <p>$500.00</p>
        <img className="service-img" src="services4.webp" alt="" />
        <ul>
          <li>3 hour session</li>
          <li>Unlimited wardrobe changes</li>
          <li>Color grading + retouching</li>
          <li>Multiple models</li>
          <li>
            A private online gallery with 36+ digital images delivered 6-8 weeks
            from the session
          </li>
          <li>Best for agencies and industry clients</li>
        </ul>
        <div className="act">
          <input type="number" />
          <button className="light-button">Purchase package</button>
        </div>
      </div> */}
    </section>
  );
}
