import React from "react";
import ProjectCard from "./project-card/ProjectCard";
import { useSelector } from "react-redux";
import {
	Container,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	Box,
	Text,
	VStack,
} from "@chakra-ui/react";
import OptionsMenu from "./project-card/OptionsMenu";
import ProjectRow from "./ProjectRow";

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
				<Box display={{ md: "block", base: "none" }}>
					<Table>
						<Thead bgColor="gray.50" py={4}>
							<Tr>
								<Th textTransform="capitalize" fontSize="md">
									Project info
								</Th>
								<Th textTransform="capitalize" fontSize="md">
									Project Manager
								</Th>
								<Th textTransform="capitalize" fontSize="md">
									Assigned to
								</Th>
								<Th textTransform="capitalize" fontSize="md">
									Status
								</Th>
								<Th textTransform="capitalize" fontSize="md">
									Action
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{projects.map(project => (
								<ProjectRow {...project} />
							))}
						</Tbody>
					</Table>
				</Box>
			</Container>
		</div>
	);
};

export default ProjectsList;
