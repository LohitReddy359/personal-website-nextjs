// Each Project Item will have title, date_worked_on, technologies used, description, link
import Link from "next/link";

function ProjectItem(props){
    return (
        <div>
            <li className = "item">
                <div className = "title">
                    <h2>{props.title}</h2>
                </div>
                <div className = "date">
                    <h3>{props.date}</h3>
                </div>
                <div className = "tech">
                    <h4>{props.tech}</h4>
                </div>
                <div className = "description">
                    <p>{props.description}</p>
                </div>
                <div className = "link">
                    <Link href={props.link}>Link to Project</Link>
                </div>
            </li>
        </div>
    );
}

export default ProjectItem;