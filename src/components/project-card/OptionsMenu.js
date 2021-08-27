import React, { useRef, useState } from "react";
import {
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	IconButton,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogBody,
	AlertDialogFooter,
	Button,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiEditBoxLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../redux/slices/projectsSlice";
import { Link } from "react-router-dom";

const OptionsMenu = ({ id }) => {
	const dispatch = useDispatch();
	const cancelRef = useRef();
	const [openDelete, setOpenDelete] = useState(false);

	const onOpenDelete = () => setOpenDelete(true);

	const onCloseDelete = () => setOpenDelete(false);

	const handleDelete = id => {
		dispatch(deleteProject(id));
		onCloseDelete();
	};

	return (
		<>
			<Menu isLazy>
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<BsThreeDotsVertical />}
					variant="ghost"
					size="lg"
				/>
				<MenuList>
					<Link to={`project/edit/${id}`}>
						<MenuItem icon={<RiEditBoxLine />}>Edit</MenuItem>
					</Link>
					<MenuItem onClick={onOpenDelete} icon={<AiOutlineDelete />}>
						Delete
					</MenuItem>
				</MenuList>
				<AlertDialog
					isOpen={openDelete}
					leastDestructiveRef={cancelRef}
					onClose={onCloseDelete}>
					<AlertDialogOverlay>
						<AlertDialogContent>
							<AlertDialogHeader fontSize="lg" fontWeight="bold">
								Delete Project
							</AlertDialogHeader>
							<AlertDialogBody>
								Are you sure? You can't undo this action afterwards.
							</AlertDialogBody>
							<AlertDialogFooter>
								<Button ref={cancelRef} onClick={onCloseDelete}>
									Cancel
								</Button>
								<Button
									colorScheme="red"
									onClick={() => handleDelete(id)}
									ml={3}>
									Delete
								</Button>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialogOverlay>
				</AlertDialog>
			</Menu>
		</>
	);
};

export default OptionsMenu;
