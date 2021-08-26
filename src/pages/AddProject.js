import { Box, Container } from "@chakra-ui/react";
import React from "react";
import HeaderBackButton from "../components/header/HeaderBackButton";
import HeaderContainer from "../components/header/HeaderContainer";
import HeaderText from "../components/header/HeaderText";
import ProjectForm from "../components/project-form/ProjectForm";

const AddProject = () => {
	return (
		<Box>
			<HeaderContainer>
				<HeaderBackButton />
				<HeaderText flex="1">Add project</HeaderText>
			</HeaderContainer>
			<Box bgColor="gray.100">
				<Container
					maxW="container.md"
					minH="100vh"
					px={{ base: 0, md: 4 }}
					py={{ base: 4, md: 8 }}>
					<ProjectForm />
				</Container>
			</Box>
		</Box>
	);
};

export default AddProject;
