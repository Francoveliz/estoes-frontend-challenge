import React from "react";
import { Box, Input, IconButton, Container } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/slices/searchSlice";
import { useSelector } from "react-redux";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";

const SearchBar = () => {
	const dispatch = useDispatch();
	const searchText = useSelector(state => state.search.searchText);

	const initialValues = {
		searchText: "",
	};

	const handleSubmit = values => {
		const text = values.searchText;
		dispatch(setSearchText(text));
	};

	const formik = useFormik({
		initialValues,
		onSubmit: values => handleSubmit(values),
	});

	const handleEnterEvent = event => {
		if (event.key === "Enter") {
			formik.handleSubmit();
		}
	};

	return (
		<Container display="flex" mb={{ base: 4, md: 8 }}>
			<Input
				bgColor="white"
				type="text"
				placeholder={searchText}
				id="searchText"
				value={formik.values.searchText}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				onKeyDown={handleEnterEvent}
			/>
			<IconButton
				colorScheme="blue"
				onClick={formik.handleSubmit}
				aria-label="Search project"
				icon={<SearchIcon />}
			/>
		</Container>
	);
};

export default SearchBar;
