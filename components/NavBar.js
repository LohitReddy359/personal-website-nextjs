import Link from "next/link";
import Image from "next/image";
import logo from "../assets/Logo.png";

function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <Image src={logo} width={50} height={50} />
        </div>
        <ul className="nav-items">
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="experience">Experience</Link>
          </li>
          <li>
            <Link href="projects">Projects</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
