import IntroText from "../components/home/IntroText";
import NavBar from "../components/NavBar";
import SocialMedia from "../components/home/SocialMedia"

import Link from "next/link";

import styles from './homepage.module.css'

export default function HomePage() {
  return (
    <div className = {styles.homepage}>
      <div>
        <NavBar />
      </div>
      <div>
        <IntroText />
      </div>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
}
