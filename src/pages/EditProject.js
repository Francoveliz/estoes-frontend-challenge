import { Box, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HeaderBackButton from "../components/header/HeaderBackButton";
import HeaderContainer from "../components/header/HeaderContainer";
import HeaderText from "../components/header/HeaderText";
import ProjectForm from "../components/project-form/ProjectForm";

const EditProject = () => {
	const { id } = useParams();
	const [projectData, setProjectData] = useState();
	const projects = useSelector(state => state.projects.projects);

	useEffect(() => {
		setProjectData(() => {
			const filterProject = projects.filter(project => {
				return project.id.toString() === id.toString();
			});
			const thisProject = filterProject[0];
			return thisProject;
		});
	}, [projects]);

	console.log({ projectData });

	return (
		<Box>
			<HeaderContainer>
				<HeaderBackButton />
				<HeaderText flex="1">Edit project</HeaderText>
			</HeaderContainer>
			<Box bgColor="gray.100">
				<Container
					maxW="container.md"
					px={{ base: 0, md: 4 }}
					minH="100vh"
					py={{ base: 4, md: 8 }}>
					{projectData && <ProjectForm {...projectData} />}
				</Container>
			</Box>
		</Box>
	);
};

export default EditProject;
