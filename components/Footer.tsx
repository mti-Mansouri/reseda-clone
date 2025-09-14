import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container">
      <h4 className="ft1">subscribe</h4>
      <p className="footer-cta1">
        Sign up with your email address to receive news and updates.
      </p>
      <form action="">
        <input type="text" placeholder="Email Address" />
        <button>Sing Up</button>
      </form>
      <p className="footer-cta2">We respect your privacy.</p>
      <div className="logo-txt">RESEDA</div>
      <section className="list-left">
        <h4>SITE MAP</h4>
        <ul>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <Link href="/gallery">gallery</Link>
          </li>
          <li>
                    <Link href="/information">information</Link>

          </li>
        </ul>
      </section>
      <section className="list-right">
        <h4>FOLLOW</h4>
        <ul>
          <li>
            <a href="">INSTAGRAM</a>
          </li>
          <li>
            <a href="">LINKEDIN</a>
          </li>
          <li>
            <a href="">TWITTER</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
