import { Box, Container, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
	return (
		<Box borderBottom="1px solid" borderColor="gray.200">
			<Container maxW="container.xl" py={4}>
				<Image src={logo} />
			</Container>
		</Box>
	);
};

export default Navbar;
