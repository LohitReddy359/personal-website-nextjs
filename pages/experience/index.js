import WorkExperienceList from '../../components/experience/WorkExperienceList';
import {experiences_data} from '../../components/experience/WorkExperienceData'



export default function WorkExperience() {
  return (<div>
    <WorkExperienceList experiences = {experiences_data} />
  </div>);
}

// in the future could include education