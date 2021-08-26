import { Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeaderBackButton = () => {
	return (
		<Link to="/">
			<Button pl={0} leftIcon={<AiOutlineArrowLeft />} variant="ghost">
				Back
			</Button>
		</Link>
	);
};

export default HeaderBackButton;
