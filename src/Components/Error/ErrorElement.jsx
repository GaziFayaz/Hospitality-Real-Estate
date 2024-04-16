import { Link } from "react-router-dom";

const ErrorElement = () => {
	return (
		<div className="flex flex-col items-center gap-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<h1 className="text-5xl">404 Page Not Found</h1>
			<Link to={"/"} className="link link-primary">
				Go to Home Page
			</Link>
		</div>
	);
};

export default ErrorElement;
