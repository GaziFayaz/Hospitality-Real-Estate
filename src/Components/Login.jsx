import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
	const { user, loading, signInEmailPassword } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	if (loading) {
		return (
			<div className="flex justify-center ">
				<span className="loading loading-spinner loading-lg text-[#5356FF] "></span>
			</div>
		);
	}


	const onSubmit = (data) => {
		console.log(data);
		signInEmailPassword(data.email, data.password)
			.then((userCredential) => {
				console.log(userCredential);
				location.state ? navigate(location.state) : navigate(-1);
			})
			.catch((error) => console.log(error));
	};

	console.log(watch("email")); // watch input value by passing the name of it

	if (!user) {
		return (
			<div className="flex-1 flex items-center">
				<form
					onSubmit={handleSubmit(onSubmit)}
					action=""
					className="mx-auto flex flex-col gap-4 w-full md:w-[500px] lg:min-w-[550px] lg:w-[2/3] items-center py-8 md:py-12 px-4 md:px-12 bg-[#5356FF] rounded-2xl md:rounded-3xl"
				>
					<h1 className="text-3xl font-bold text-center text-white">Login</h1>
					<div className="w-full">
						<p className="text-xl font-semibold text-white mb-2">Email</p>
						<input
							{...register("email", { required: true })}
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
							{...register("password", { required: true })}
							type="password"
							name="password"
							id="password"
							placeholder="Your Password"
							className="border-b-2 border-gray-400 w-full p-2 rounded-xl"
						/>
						{errors.password && <span>This field is required</span>}
						<a className="text-sm text-gray-300 self-end link-hover mt-1">
							Forgot Password?
						</a>
					</div>
					<input
						type="submit"
						value={"Login"}
						className="btn w-full text-xl border-none bg-[#67C6E3] text-white"
					/>
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
	}
	else{
		navigate("/");
	}
	
};

export default Login;
