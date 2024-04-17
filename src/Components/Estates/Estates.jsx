import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Estates = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	const [estates, setEstates] = useState([]);
	useEffect(() => {
		fetch("estates.json")
			.then((res) => res.json())
			.then((data) => setEstates(data));
	}, []);

	return (
		<div className="flex flex-col items-center text-center w-full">
			<h1 className="text-7xl font-bold text-[#5356FF]">Estates</h1>
			<p className="w-3/4 text-xl mt-5">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
				vitae molestias natus similique aut
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-14">
				{estates.map((estate) => {
					console.log(estate);
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
										<Link to={`estate/${estate.id}`}>
											<button className="btn bg-[#5356FF] text-white">
												See Details
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Estates;
