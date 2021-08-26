import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProject from "./pages/AddProject";
import { useEffect } from "react";
import { projects } from "./data/projects.json";
import { setProjects } from "./redux/slices/projectsSlice";
import { useDispatch } from "react-redux";
import EditProject from "./pages/EditProject";
import { Box } from "@chakra-ui/react";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setProjects([...projects]));
	}, []);
	return (
		<Box>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/project/add" component={AddProject} exact />
					<Route path="/project/edit/:id" component={EditProject} exact />
				</Switch>
			</Router>
		</Box>
	);
}

export default App;
