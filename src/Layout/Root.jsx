import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
	return (
		<div className="font-poppins min-h-screen flex flex-col justify-between bg-[#DFF5FF]">
			<Navbar></Navbar>
			<div className="py-10">
				<Outlet></Outlet>
			</div>

			<Footer></Footer>
		</div>
	);
};

export default Root;
