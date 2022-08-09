import Link from "next/link";
import Image from "next/Image";
import mail from "../../assets/icons/mail.png"
import git from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"
import insta from "../../assets/icons/instagram.png"


function SocialMedia() {
  return (
    <div className="soc-med-container">
      <ul className="soc-med-items">
        <li>
            <Link href="mailto:kamatham.lohit@gmail.com">
                <Image src={mail} />
            </Link>
        </li>
        <li>
            <Link href="https://github.com/LohitReddy359">
                <Image src={git} />
            </Link>
        </li>
        <li>
            <Link href="https://www.linkedin.com/in/lohit-kamatham-52b183226/">
                <Image src={linkedin} />
            </Link>
        </li>
        <li>
            <Link href="https://www.instagram.com/lohit_reddyk/">
                <Image src={insta} />
            </Link>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
