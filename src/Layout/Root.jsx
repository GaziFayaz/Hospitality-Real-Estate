import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
	return (
		<div className="font-poppins min-h-screen flex flex-col justify-between bg-[#DFF5FF]">
			<Navbar></Navbar>
			<div className="mx-6 md:mx-12 lg:mx-32">
				<Outlet></Outlet>
				<ToastContainer />
			</div>

			<Footer></Footer>
		</div>
	);
};

export default Root;
