// Each WE Item will have date_worked, company_name, location, role, description

function WorkExperienceItem(props){
    return (
        <div>
            <li className = {classes.item}>
                <div className = {classes.date}>
                    <h2>{props.date}</h2>
                </div>
                <div className = {classes.company}>
                    <h3>{props.company} | {props.location}</h3>
                </div>
                <div className = {classes.role}>
                    <h4>{props.role}</h4>
                </div>
                <div className = {classes.description}>
                    <p>{props.description}</p>
                </div>
            </li>
        </div>
    );
}

export default WorkExperienceItem;