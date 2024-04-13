import { useEffect, useState } from "react";

const Estates = () => {
	const [estates, setEstates] = useState([]);
	useEffect(() => {
		fetch("estates.json")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setEstates(data);
			});
	}, []);

	return (
		<div className="flex flex-col items-center text-center">
			<h1 className="text-7xl font-bold text-[#474afa]">Estates</h1>
			<p className="w-3/4 text-xl mt-5">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
				vitae molestias natus similique aut
			</p>
			<div className="grid grid-cols-3 gap-4">
				{estates.map((estate, index) => {
          console.log(estate)
					return (
						<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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
