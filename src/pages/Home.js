import { Box } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import HeaderContainer from "../components/header/HeaderContainer";
import HeaderText from "../components/header/HeaderText";
import PrimaryButton from "../components/PrimaryButton";
import ProjectsList from "../components/ProjectsList";

const Home = () => {
	return (
		<Box>
			<HeaderContainer>
				<HeaderText flex="1">My projects</HeaderText>
				<Link to="/project/add">
					<PrimaryButton Icon={AiOutlinePlus} size="sm">
						Add project
					</PrimaryButton>
				</Link>
			</HeaderContainer>
			<Box bgColor="gray.100" minH="100vh" py={{ base: 4, md: 8 }}>
				<ProjectsList />
			</Box>
		</Box>
	);
};

export default Home;
