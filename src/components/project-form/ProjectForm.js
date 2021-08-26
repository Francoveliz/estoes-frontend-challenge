import React from "react";
import {
	FormControl,
	Button,
	FormLabel,
	Input,
	Stack,
	Image,
	Box,
	VStack,
	Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import InputAlert from "../InputAlert";
import { validationSchema } from "./validationSchema";
import PrimaryButton from "../PrimaryButton";
import { useDispatch } from "react-redux";
import { addProject, editProject } from "../../redux/slices/projectsSlice";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const ProjectForm = ({
	projectName,
	description,
	projectManager,
	assignedTo,
	status,
	id,
	creationDate,
}) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const toast = useToast();

	const initialFormValues = {
		projectName: projectName ? projectName : "",
		description: description ? description : "",
		projectManager: projectManager ? projectManager : "",
		assignedTo: assignedTo ? assignedTo : "",
		status: status ? status : "enabled",
	};

	const handleInputError = (input, formik) => {
		if (formik.touched[input] && formik.errors[input]) {
			return <InputAlert text={formik.errors[input]} />;
		}
		return null;
	};

	const handleSubmit = values => {
		if (id) {
			dispatch(
				editProject({
					id,
					creationDate,
					...values,
				})
			);
			toast({
				title: "The project has been successfully edited",
				status: "success",
				duration: 9000,
				isClosable: true,
			});
		} else {
			dispatch(
				addProject({
					id: uuidv4(),
					...values,
					creationDate: Date.now(),
				})
			);
			toast({
				title: "The project has been successfully created",
				status: "success",
				duration: 9000,
				isClosable: true,
			});
		}
		history.push("/");
	};

	const formik = useFormik({
		initialValues: initialFormValues,
		validationSchema: validationSchema,
		onSubmit: values => handleSubmit(values),
	});
	return (
		<VStack
			as="form"
			spacing={5}
			boxShadow="lg"
			px={4}
			py={8}
			mb={24}
			borderRadius="xl"
			bg="white"
			alignItems="start">
			{/* projectName input */}
			<FormControl>
				<FormLabel>Project name</FormLabel>
				<Input
					type="text"
					id="projectName"
					value={formik.values.projectName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{handleInputError("projectName", formik)}
			</FormControl>
			{/* description input */}
			<FormControl>
				<FormLabel>Description</FormLabel>
				<Input
					type="text"
					id="description"
					value={formik.values.description}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{handleInputError("description", formik)}
			</FormControl>
			{/* projectManager input */}
			<FormControl>
				<FormLabel>Project manager</FormLabel>
				<Select
					placeholder="Select a person"
					value={formik.values.projectManager}
					onChange={event => {
						formik.setFieldValue("projectManager", event.target.value);
					}}>
					<option value="Walt Cosani">Walt Cosani</option>
				</Select>
				{handleInputError("projectManager", formik)}
			</FormControl>
			{/* assignedTo input */}
			<FormControl>
				<FormLabel>Assigned to</FormLabel>
				<Select
					placeholder="Select a person"
					value={formik.values.assignedTo}
					onChange={event => {
						formik.setFieldValue("assignedTo", event.target.value);
					}}>
					<option value="Ignacio Truffa">Ignacio Truffa</option>
				</Select>
				{handleInputError("assignedTo", formik)}
			</FormControl>
			{/* status input */}
			<FormControl>
				<FormLabel>Status</FormLabel>
				<Select
					value={formik.values.status}
					onChange={event => {
						formik.setFieldValue("status", event.target.value);
					}}>
					<option value="enabled">Enabled</option>
					<option value="disabled">Disabled</option>
				</Select>
				{handleInputError("status", formik)}
			</FormControl>
			<PrimaryButton onClick={formik.handleSubmit}>
				{id ? "Save changes" : "Create project"}
			</PrimaryButton>
		</VStack>
	);
};

export default ProjectForm;
