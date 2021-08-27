import { Box, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import ProjectRow from "./ProjectRow";

const thTitles = [
	"Project info",
	"Project Manager",
	"Assigned to",
	"Status",
	"Action",
];

const ProjectsTable = ({ projects }) => {
	return (
		<Box display={{ md: "block", base: "none" }}>
			<Table>
				<Thead bgColor="gray.50" py={4}>
					<Tr>
						{thTitles.map(title => (
							<Th textTransform="capitalize" fontSize="md">
								{title}
							</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>
					{projects.map(project => (
						<ProjectRow {...project} />
					))}
				</Tbody>
			</Table>
		</Box>
	);
};

export default ProjectsTable;
