import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../Components/About";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Home from "../Components/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/about",
				element: <About></About>
			},
			{
				path: "/login",
				element: <Login></Login>
			},
			{
				path: "/register",
				element: <Register></Register>
			},
		]
	},
]);
