import Link from "next/link";
import Image from "next/image";
import mail from "../../assets/icons/mail.png"
import git from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"
import insta from "../../assets/icons/instagram.png"

import styles from './socialmedia.module.css'


function SocialMedia() {
  return (
    <div className = {styles.socmedcontainer}>
      <ul className={styles.socmeditems}>
        <li>
            <Link href="mailto:kamatham.lohit@gmail.com">
                <a><Image src={mail} /></a>
            </Link>
        </li>
        <li>
            <Link href="https://github.com/LohitReddy359">
                <a><Image src={git} /></a>
            </Link>
        </li>
        <li>
            <Link href="https://www.linkedin.com/in/lohit-kamatham-52b183226/">
                <a><Image src={linkedin} /></a>
            </Link>
        </li>
        <li>
            <Link href="https://www.instagram.com/lohit_reddyk/">
                <a><Image src={insta} /></a>
            </Link>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
