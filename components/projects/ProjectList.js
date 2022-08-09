import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  return (
    <div>
      <ul className="list">
        {props.projects?.map((project) => (
          <ProjectItem
            id={project.id}
            title={project.title}
            date={project.date}
            tech={project.tech}
            description={project.description}
            link={project.link}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
