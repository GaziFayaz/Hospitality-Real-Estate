import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Home from "../Components/Home";
import EstateDetails from "../Components/Estates/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import ErrorElement from "../Components/Error/ErrorElement";
import ShortlistEstates from "../Components/ShortlistEstates/ShortlistEstates";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/shortlisted-estates",
				element: (
					<PrivateRoutes>
						<ShortlistEstates></ShortlistEstates>
					</PrivateRoutes>
				),
				loader: () => fetch("../estates.json"),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "estate/:id",
				element: (
					<PrivateRoutes>
						<EstateDetails></EstateDetails>
					</PrivateRoutes>
				),
				loader: () => fetch("../estates.json"),
			},
			{
				path: "/update-profile",
				element: (
					<PrivateRoutes>
						<UpdateProfile></UpdateProfile>
					</PrivateRoutes>
				),
			},
		],
		errorElement: <ErrorElement></ErrorElement>,
	},
]);
