import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateProfile = () => {
	const { user, customizeProfile } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		watch,
		formState: { isDirty },
	} = useForm({
		defaultValues: { name: user.displayName, photoUrl: user.photoURL },
	});

	const onSubmit = (data) => {
		console.log(data);
		customizeProfile(data.name, data.photoUrl)
			.then((userCredential) => {
				// Signed up
				console.log(userCredential);
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
				// ..
			});
	};

	console.log(watch("email"));

	return (
		<div className="flex-1 flex items-center">
			<form
				onSubmit={handleSubmit(onSubmit)}
				action=""
				className="mx-auto flex flex-col gap-4 w-full md:w-[500px] lg:min-w-[550px] lg:w-[2/3] items-center py-8 md:py-12 px-4 md:px-12 bg-[#5356FF] rounded-2xl md:rounded-3xl"
			>
				<img
					src={user.photoURL}
					className="rounded-full w-1/3 aspect-square object-cover"
				/>
				<div className="w-full">
					<p className="text-xl font-semibold text-white mb-2">Name</p>
					<input
						{...register("name")}
						type="text"
						name="name"
						id="name"
						placeholder="Your Name"
						className="border-b-2 border-gray-400 w-full p-2 rounded-xl"
					/>
				</div>
				<div className="w-full">
					<p className="text-xl font-semibold text-white mb-2">Email</p>
					<input
						value={user.email}
						type="email"
						name="email"
						id="email"
						disabled
						className="text-white border-b-2 border-gray-400 w-full p-2 rounded-xl"
					/>
				</div>
				<div className="w-full flex flex-col">
					<p className="text-xl font-semibold text-white mb-2">Photo URL</p>
					<input
						{...register("photoUrl", { required: true })}
						type="text"
						name="photoUrl"
						id="photoUrl"
						placeholder="Photo Url"
						className="border-b-2 border-gray-400 w-full p-2 rounded-xl"
					/>
				</div>
				<input
					type="submit"
					value={"Update Profile"}
					disabled={!isDirty}
					className= {`btn w-full text-xl border-none bg-[#67C6E3] text-white disabled:opacity-100 disabled:cursor-not-allowed`}
				/>
			</form>
		</div>
	);
};

export default UpdateProfile;
