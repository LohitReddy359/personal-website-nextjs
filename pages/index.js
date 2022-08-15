import IntroText from "../components/home/IntroText";
import SocialMedia from "../components/home/SocialMedia"

import Link from "next/link";

import styles from '../styles/css/homepage.module.css'

export default function HomePage() {
  return (
    <div className = {styles.homepage}>
      <div>
        <IntroText />
      </div>
    </div>
  );
}
