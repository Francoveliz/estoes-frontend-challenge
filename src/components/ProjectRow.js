import { Avatar, HStack, Td, Text, Tr, VStack } from "@chakra-ui/react";
import React from "react";
import OptionsMenu from "./project-card/OptionsMenu";
import profile from "../assets/images/profile.jpg";

const ProjectRow = ({
	creationDate,
	projectName,
	projectManager,
	assignedTo,
	status,
	id,
}) => {
	const customDate = new Date(creationDate);

	return (
		<Tr bgColor="white">
			<Td>
				<VStack alignItems="start">
					<Text fontSize="lg" color="gray.600">
						{projectName}
					</Text>
					<Text fontSize="sm" color="gray.400">
						{customDate.toLocaleString("en-US")}
					</Text>
				</VStack>
			</Td>
			<Td>
				<HStack alignItems="center">
					<Avatar size="sm" name="ignacio truffa" src={profile} mr={1} />
					<Text> {projectManager}</Text>
				</HStack>
			</Td>
			<Td>
				<HStack alignItems="center">
					<Avatar size="sm" name="ignacio truffa" src={profile} mr={1} />
					<Text>{assignedTo}</Text>
				</HStack>
			</Td>
			<Td>
				<Text
					bgColor="gray.50"
					display="block"
					width="min-content"
					textTransform="capitalize"
					color="gray.600"
					borderRadius="md"
					py={1}
					px={2}>
					{status}
				</Text>
			</Td>
			<Td>
				<OptionsMenu id={id} />
			</Td>
		</Tr>
	);
};

export default ProjectRow;
