import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { ImDiamonds } from "react-icons/im";
import { MdSpaceDashboard } from "react-icons/md";
import { useParams, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import shortListEstate from "../../utilities/shortListEstate";
const EstateDetails = () => {
	const shortlistKey = "shortlistedEstates";
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	useEffect(() => {
		if(!localStorage.getItem(shortlistKey)) localStorage.setItem(shortlistKey, JSON.stringify([]))
	}, [])

	const successToast = (message) =>
		toast.success(message, {
			position: "bottom-right",
		});

	const errorToast = (message) =>
		toast.error(message, {
			position: "bottom-right",
		});

	const { id } = useParams();
	const estate = useLoaderData().find((estate) => estate.id === parseInt(id));
	return (
		<div>
			<Helmet>
				<title>Hotel Hive | {estate.estate_title}</title>
			</Helmet>
			<div className="rounded-3xl flex flex-col lg:flex-row justify-between w-full gap-4 lg:gap-0">
				<img
					data-aos="fade-right"
					src={estate.image}
					alt=""
					className=" object-cover rounded-lg lg:rounded-3xl lg:w-1/2"
				/>
				<div data-aos="fade-left" className="lg:ml-10 flex flex-col lg:w-1/2">
					<div className="flex flex-col lg:flex-row gap-2 lg:gap-4 lg:items-center">
						<h1 className="text-2xl lg:text-4xl font-semibold">
							{estate.estate_title}
						</h1>
						<div className=" badge badge-outline border-green-600 text-green-600 text-lg font-medium">
							{estate.segment_name}
						</div>
					</div>

					<p className="text-justify mt-4 lg:text-lg font-medium lg:leading-6">
						{estate.description}
					</p>
					<div className="mt-5 flex flex-col gap-2">
						<div className="flex flex-col lg:flex-row gap-2 lg:gap-20 lg:items-center">
							<div className="flex items-center gap-2 text-left lg:text-lg">
								<MdSpaceDashboard className="text-lg lg:text-xl" />
								<span className="font-bold">{estate.area}</span>
							</div>
							<div className="flex items-center gap-2 text-left lg:text-lg">
								<FaLocationDot className="text-lg lg:text-xl" />{" "}
								<span className="font-bold">{estate.location}</span>
							</div>
						</div>
						<div className="flex flex-col gap-2 lg:mt-4">
							{/* <GrDiamond className="text-xl text-purple-700" /> */}
							<span className="lg:text-xl font-bold">Facilities</span>
							<div className="flex flex-col lg:flex-row gap-2 lg:gap-6 ml-4 lg:ml-0">
								{estate.facilities.map((facility, index) => (
									<div className="flex items-center gap-1" key={index}>
										<ImDiamonds className="text-[#5356FF] " />
										<span className="font-semibold lg:text-lg tracking-tight">
											{facility}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="mt-4 lg:mt-10 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
						<p className="text-2xl font-bold text-green-600 text-center lg:text-left">
							Price: {estate.price}
						</p>
						<p className="text-center lg:text-right font-bold text-xl text-red-600 border-2 border-red-500 lg:p-2  rounded-lg">
							Available for {estate.status}
						</p>
					</div>
					<div className="flex justify-center">
						<button onClick={() => shortListEstate(shortlistKey, estate.id, successToast, errorToast)} className="btn btn-primary">Add to shortlist</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EstateDetails;
