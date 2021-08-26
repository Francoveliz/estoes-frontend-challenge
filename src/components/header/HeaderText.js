import { Box, Text } from "@chakra-ui/react";
import React from "react";

const HeaderText = ({ children, ...rest }) => {
	return (
		<Text fontSize="xl" fontWeight="bold" {...rest}>
			{children}
		</Text>
	);
};

export default HeaderText;
