import WorkExperienceList from '../../components/experience_page/WorkExperienceList';
import {experiences_data} from '../../components/experience_page/WorkExperienceData'



export default function WorkExperience() {
  return (<div>
    <WorkExperienceList experiences = {experiences_data} />
  </div>);
}
 