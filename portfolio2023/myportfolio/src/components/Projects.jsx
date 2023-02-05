import projects from "../json/projects.json";
console.log(projects);
import {
  ProjectsContainer,
  ProjectCard,
  ProjectImage,
  ProjectLink,
  ProjectDescription,
  ProjectLinkContainer,
} from "../styledcomponents/Projects";

export default function Projects() {
  return (
    <ProjectsContainer>
      {projects.map((project) => (
        <ProjectCard key={project.name}>
          <h3>{project.name}</h3>
          <ProjectImage src={project.image} />
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectLinkContainer>
            <ProjectLink href={project.github}>Github</ProjectLink>
            <ProjectLink href={project.live}>Live Site</ProjectLink>
          </ProjectLinkContainer>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}
