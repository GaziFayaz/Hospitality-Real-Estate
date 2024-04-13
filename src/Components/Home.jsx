import Banner from "./Banner/Banner";
import Estates from "./Estates/Estates";

const Home = () => {
	return (
		<div className="flex-1 flex flex-col items-center mx-32 gap-24">
			<Banner></Banner>
      <Estates></Estates>
		</div>
	);
};

export default Home;
