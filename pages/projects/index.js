import ProjectsList from '../../components/projects/ProjectList';
import {projects_data} from '../../components/projects/ProjectData';



export default function Projects() {
  return (<div>
    <ProjectsList projects = {projects_data} />
  </div>);
}