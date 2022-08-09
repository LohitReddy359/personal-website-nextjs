import IntroText from "../components/home/IntroText";
import NavBar from "../components/NavBar";
import SocialMedia from "../components/home/SocialMedia"

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
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
