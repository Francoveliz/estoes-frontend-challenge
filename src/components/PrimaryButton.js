import { Button } from "@chakra-ui/react";
import React from "react";

const PrimaryButton = ({ children, Icon, ...rest }) => {
	return (
		<Button
			leftIcon={Icon && <Icon />}
			colorScheme="red"
			color="white"
			{...rest}>
			{children}
		</Button>
	);
};

export default PrimaryButton;
