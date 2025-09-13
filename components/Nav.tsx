import Link from "next/link";
export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">RESEDA PHOTOGRAPHY</Link>
      </div>

      <ul>
        <li>
          <a href="">services</a>
        </li>
        <li>
          <Link href="/gallery">gallery</Link>
        </li>
        <li>
          <a href="">information</a>
        </li>
        <li>
          <div className="shopping-card">
            <a href="">cart</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
