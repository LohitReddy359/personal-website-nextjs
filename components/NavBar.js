import Link from "next/link";

import styles from "./navbar.module.css";

function NavBar() {
  return (
    <div className={styles.navcontainer}>
      <ul className={styles.navitems}>
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
