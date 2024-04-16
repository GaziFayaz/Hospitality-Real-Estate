import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Estates from "./Estates/Estates";

const Home = () => {
	return (
		<div className="flex-1 flex flex-col items-center gap-24">
			<Helmet>
				<title>Hotel Hive | Home</title>
			</Helmet>
			<Banner></Banner>
			<Estates></Estates>
		</div>
	);
};

export default Home;
