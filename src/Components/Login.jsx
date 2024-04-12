import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="flex-1 flex items-center">
			<form
				action=""
				className="mx-auto flex flex-col gap-4 w-[350px] md:w-[400px] lg:w-1/4 items-center p-12 bg-[#5356FF] rounded-3xl"
			>
				<h1 className="text-3xl font-bold text-center text-white">Login</h1>
				<div className="w-full">
					<p className="text-xl font-semibold text-white mb-2">Email</p>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your Email"
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
						className="border-b-2 border-gray-400 w-full p-2 rounded-xl"
					/>
					<a className="text-sm text-gray-300 self-end link-hover mt-1">
						Forgot Password?
					</a>
				</div>
				<button className="btn w-full text-xl border-none bg-[#67C6E3] text-white">
					Login
				</button>
				<p className="text-white font-semibold">Or Sign In using</p>
				<div className="flex gap-8">
					<FaGoogle className="text-3xl text-white" />
					<FaFacebookF className="text-3xl text-white" />
				</div>
				<p className="text-white w-full text-right mt-4">
					New here?{" "}
					<Link
						to="/register"
						className="link link-hover text-[#67C6E3] font-bold text-lg "
					>
						Register
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
