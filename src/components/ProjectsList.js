import React from "react";
import ProjectCard from "./project-card/ProjectCard";
import { useSelector } from "react-redux";
import { Container, Box } from "@chakra-ui/react";
import ProjectsTable from "./ProjectsTable";

const ProjectsList = () => {
	const searchText = useSelector(state => state.search.searchText);
	const projects = useSelector(state => state.projects.projects);

	const filterProjects = projects.filter(project =>
		project.projectName.toLowerCase().includes(searchText.toLowerCase())
	);

	return (
		<div>
			<Container maxW="container.xl" px={{ base: 0, md: 4 }}>
				<Box display={{ md: "none", base: "block" }}>
					{filterProjects.map(project => (
						<ProjectCard {...project} key={project.id} />
					))}
				</Box>
				<ProjectsTable projects={filterProjects} />
			</Container>
		</div>
	);
};

export default ProjectsList;
