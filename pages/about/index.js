import IntroPara from "../../components/about/IntroPara";
import MyPic from "../../components/about/MyPic";
import Skills from "../../components/about/Skills";
import SectionHeading from "../../components/SectionHeading";

import styles from "../../styles/css/aboutpage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutpage}>
      <article>
        <div>
          <SectionHeading text="About Me" className={styles.heading} />
        </div>
        <div>
          <MyPic className={styles.mypic} />
        </div>
        <div>
          <IntroPara />
        </div>
        <div>
          <Skills />
        </div>
      </article>
    </div>
  );
}
