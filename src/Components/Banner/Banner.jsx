import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
	return (
		<div className="w-full">
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				
        navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				<SwiperSlide>
					<div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(banner-image-1.jpg)] h-[70vh] rounded-3xl bg-cover bg-no-repeat bg-bottom flex items-center justify-center">
						<h1 className="text-white text-7xl w-2/3 text-center font-semibold">
							Experience Tranquility
						</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(banner-image-2.jpg)] h-[70vh] rounded-3xl bg-cover bg-no-repeat bg-bottom flex items-center justify-center">
						<h1 className="text-white text-7xl w-2/3 text-center font-semibold">
							Escape to Luxury
						</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(banner-image-3.jpg)] h-[70vh] rounded-3xl bg-cover bg-no-repeat bg-bottom flex items-center justify-center">
						<h1 className="text-white text-7xl w-2/3 text-center font-semibold">
							Create Lasting Memories
						</h1>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
