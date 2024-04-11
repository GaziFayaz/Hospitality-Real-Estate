import { Link, NavLink } from "react-router-dom";

const Root = () => {
	const routeItems = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive}) =>
						isActive ? "bg-[#67C6E3] text-[#5356FF]" : ""
					}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/about"
					className={({ isActive}) =>
						isActive ? "bg-[#67C6E3] text-[#5356FF]" : ""
					}
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/login"
					className={({ isActive}) =>
						isActive ? "bg-[#67C6E3] text-[#5356FF]" : ""
					}
				>
					Login
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/register"
					className={({ isActive}) =>
						isActive ? "bg-[#67C6E3] text-[#5356FF]" : ""
					}
				>
					Register
				</NavLink>
			</li>
		</>
	);
	return (
		<div className="font-poppins">
			<div className="navbar bg-[#378CE7]">
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
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{routeItems}
						</ul>
					</div>
					<Link to={"/"} className="btn btn-ghost text-3xl text-white ">HotelHive</Link>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal px-1 text-xl font-bold text-[#FFE6E6]">
						{routeItems}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Root;
