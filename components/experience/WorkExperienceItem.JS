// Each WE Item will have date_worked, company_name, location, role, description

function WorkExperienceItem(props){
    return (
        <div>
            <li className = "item">
                <div className = "date">
                    <h2>{props.date}</h2>
                </div>
                <div className = "company">
                    <h3>{props.company} | {props.location}</h3>
                </div>
                <div className = "role">
                    <h4>{props.role}</h4>
                </div>
                <div className = "description">
                    <p>{props.description}</p>
                </div>
            </li>
        </div>
    );
}

export default WorkExperienceItem;