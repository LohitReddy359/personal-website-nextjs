import IntroPara from "../../components/about_page/IntroPara";
import MyPic from "../../components/about_page/MyPic";
import Skills from "../../components/about_page/Skills";
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
