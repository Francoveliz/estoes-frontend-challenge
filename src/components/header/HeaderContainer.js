import { Box, Container } from "@chakra-ui/react";
import React from "react";

const HeaderContainer = ({ children }) => {
	return (
		<Container maxW="container.xl" px={{ base: 0, md: 4 }}>
			<Box
				bgColor="white"
				py={{ base: 2 }}
				px={{ base: 4, md: 0 }}
				display="flex"
				alignItems="center">
				{children}
			</Box>
		</Container>
	);
};

export default HeaderContainer;
