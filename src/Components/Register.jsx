import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="flex-1 flex items-center">
			<form
				action=""
				className="mx-auto flex flex-col gap-4 w-full md:w-[500px] lg:min-w-[550px] lg:w-[2/3] items-center py-8 md:py-12 px-4 md:px-12 bg-[#5356FF] rounded-2xl md:rounded-3xl"
			>
				<h1 className="text-3xl font-bold text-center text-white">Register</h1>
				<div className="w-full">
					<p className="text-xl font-semibold text-white mb-2">Name</p>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Your Name"
						required
						className="border-b-2 border-gray-400 w-full p-2 rounded-xl"
					/>
				</div>
				<div className="w-full">
					<p className="text-xl font-semibold text-white mb-2">Email</p>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your Email"
						required
						className="border-b-2 border-gray-400 w-full p-2 rounded-xl"
					/>
				</div>
				<div className="w-full flex flex-col">
					<p className="text-xl font-semibold text-white mb-2">Photo URL</p>
					<input
						type="text"
						name="photoUrl"
						id="photoUrl"
						placeholder="Photo Url"
						required
						className="border-b-2 border-gray-400 w-full p-2 rounded-xl"
					/>
				</div>
				<div className="w-full flex flex-col">
					<p className="text-xl font-semibold text-white mb-2">Password</p>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Your Password"
						required
						className="border-b-2 border-gray-400 w-full p-2 rounded-xl"
					/>
				</div>
				<button className="btn w-full text-xl border-none bg-[#67C6E3] text-white">
					Sign Up
				</button>
				<p className="text-white font-semibold">Or Sign Up using</p>
				<div className="flex gap-8">
					<FaGoogle className="text-3xl text-white" />
					<FaFacebookF className="text-3xl text-white" />
				</div>
				<p className="text-white w-full text-center mt-2">
					Already have an account?{" "}
					<Link
						to="/login"
						className="link link-hover text-[#67C6E3] font-bold text-lg "
					>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;
