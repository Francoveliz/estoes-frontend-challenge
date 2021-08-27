import React from "react";
import ProjectCard from "./project-card/ProjectCard";
import { useSelector } from "react-redux";
import { Container, Box } from "@chakra-ui/react";
import ProjectsTable from "./ProjectsTable";

const ProjectsList = () => {
	const projects = useSelector(state => state.projects.projects);
	return (
		<div>
			<Container maxW="container.xl" px={{ base: 0, md: 4 }}>
				<Box display={{ md: "none", base: "block" }}>
					{projects.map(project => (
						<ProjectCard {...project} key={project.id} />
					))}
				</Box>
				<ProjectsTable projects={projects} />
			</Container>
		</div>
	);
};

export default ProjectsList;
