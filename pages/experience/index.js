import WorkExperienceList from '../../components/experience/WorkExperienceList';
import {experiences_data} from '../../components/experience/WorkExperienceData'

import styles from '../../styles/css/experiencepage.module.css'


export default function WorkExperience() {
  return (<div className = {styles.experiencepage}>
    <article>
    <WorkExperienceList experiences = {experiences_data} />
    </article>
  </div>);
}

// in the future could include education