import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const ShortlistEstates = () => {
	const { user } = useContext(AuthContext);
	const estates = useLoaderData();
	const [shortlistedEstatesId, setShortlistedEstatesId] = useState([]);
	useEffect(() => {
		if (localStorage.getItem("shortlistedEstates")) {
			if (JSON.parse(localStorage.getItem("shortlistedEstates"))[user.uid]) {
				setShortlistedEstatesId(
					JSON.parse(localStorage.getItem("shortlistedEstates"))[user.uid]
				);
			} else {
				setShortlistedEstatesId([]);
			}
		} else {
			setShortlistedEstatesId([]);
		}
	}, [user]);
	return (
		<div className="flex flex-col items-center text-center w-full">
			<Helmet>
				<title>Hotel Hive | Shortlist Estates</title>
			</Helmet>
			<h1 className="text-6xl font-bold text-[#5356FF]">Shortlisted Estates</h1>
			{!shortlistedEstatesId.length && (
				<p className="flex w-full text-2xl font-bold text-red-500 justify-center mt-10">
					No Shortlisted Estates Available
				</p>
			)}
			{shortlistedEstatesId && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-20">
					{/* <p>{shortlistedEstatesId}</p> */}
					{estates.map((estate) => {
						// console.log(estate);
						if (shortlistedEstatesId.includes(estate.id)) {
							return (
								<div
									data-aos="zoom-in"
									className="card card-compact bg-base-100 shadow-xl w-full"
									key={estate.id}
								>
									<figure>
										<img
											src={estate.image}
											alt="Shoes"
											className="h-[250px] w-full object-cover"
										/>
									</figure>
									<div className="card-body">
										<div className="flex justify-between">
											<h2 className="card-title text-left">
												{estate.estate_title}
											</h2>

											<p className="text-right text-lg font-semibold">
												<span
													className={
														estate.status === "Sale"
															? "text-amber-500"
															: "text-blue-500"
													}
												>
													{estate.status}
												</span>
											</p>
										</div>
										<div className="badge badge-outline border-green-600 text-green-600">
											{estate.segment_name}
										</div>
										<div className="flex items-center gap-2 text-left text-lg font-bold mt-2">
											<MdSpaceDashboard />
											<span className="font-bold">{estate.area}</span>
										</div>
										<div className="flex items-center gap-2 text-left text-lg font-semibold">
											<FaLocationDot />{" "}
											<span className="font-bold">{estate.location}</span>
										</div>
										<div className="flex items-center">
											<p className="text-left text-lg font-bold">
												Price:{" "}
												<span className="font-extrabold text-xl">
													{estate.price}
												</span>
											</p>
											<div className="card-actions justify-end">
												<Link to={`../estate/${estate.id}`}>
													<button className="btn bg-[#5356FF] text-white">
														See Details
													</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							);
						}
					})}
				</div>
			)}
		</div>
	);
};

export default ShortlistEstates;
