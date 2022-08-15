import ProjectsList from "../../components/projects/ProjectList";
import { projects_data } from "../../components/projects/ProjectData";

import styles from "./projectspage.module.css";

export default function Projects() {
  return (
    <div class={styles.projectspage}>
      <article>
        <ProjectsList projects={projects_data} />
      </article>
    </div>
  );
}
