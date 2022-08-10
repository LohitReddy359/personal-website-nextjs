import IntroPara from "../../components/about/IntroPara";
import MyPic from "../../components/about/MyPic";
import Skills from "../../components/about/Skills";
import SectionHeading from "../../components/SectionHeading";

export default function AboutPage() {
  return (
    <div>
      <div>
        <SectionHeading text="About Me" />
      </div>
      <div>
        <MyPic />
      </div>
      <div>
        <IntroPara />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
}
