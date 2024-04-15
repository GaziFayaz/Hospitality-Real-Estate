import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
	const { user, logout } = useContext(AuthContext);
	console.log("user", user);
	const activeLinkAttr = "bg-[#5356FF] text-white";

	const routeItems = (
		<>
			<li className="h-full">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? activeLinkAttr : "")}
				>
					Home
				</NavLink>
			</li>
			<li className="h-full">
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? activeLinkAttr : "")}
				>
					About
				</NavLink>
			</li>

			
		</>
	);
	return (
		<div className="navbar ">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="z-50 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{routeItems}
					</ul>
				</div>
				<Link
					to={"/"}
					className="btn btn-ghost text-4xl text-[#5356FF] font-extrabold"
				>
					HotelHive
				</Link>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal px-1 text-xl font-bold text-[#5356FF] h-full items-center">
					{routeItems}
					{user ? (
				<>
					<li className="h-full">
						<NavLink
							to="/update-profile"
							className={({ isActive }) => (isActive ? activeLinkAttr : "")}
						>
							Update Profile
						</NavLink>
					</li>
					<button
						className="underline text-[#5356FF]  text-xl font-bold"
						onClick={() => logout()}
					>
						Logout
					</button>
					<li className="ml-4 h-full" title={user.displayName}>
						<div className="h-full p-0">
							{user.photoUrl ? (
								<img
									src={user.photoUrl}
									alt="profile"
									className="h-10 w-10 rounded-full"
								></img>
							) : (
								<CgProfile className=" text-3xl text-black  rounded-full"></CgProfile>
							)}
						</div>
					</li>
				</>
			) : (
				<>
					<li className="h-full">
						<NavLink
							to="/login"
							className={({ isActive }) => (isActive ? activeLinkAttr : "")}
						>
							Login
						</NavLink>
					</li>
					<li className="h-full">
						<NavLink
							to="/register"
							className={({ isActive }) => (isActive ? activeLinkAttr : "")}
						>
							Register
						</NavLink>
					</li>
				</>
			)}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
