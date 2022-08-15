import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

import Logo from "../../assets/Logo.png";

function NavBar() {
  return (
    <div className={styles.navcontainer}>
      <ul className={styles.navitems}>
        <li className={styles.logo}>
          <Link href="/#">
            <div className = {styles.logoimg}>
            <Image src={Logo} alt="Logo" />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/experience">
            <a>Experience</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
