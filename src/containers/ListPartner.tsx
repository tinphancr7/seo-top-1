import {listPartners} from "@/constants";
import Image from "next/image";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Autoplay} from "swiper/modules";

const ListPartner = () => {
	return (
		<div>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				loop={true}
				modules={[Autoplay]}
				breakpoints={{
					"@0.00": {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					"@0.75": {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					"@1.00": {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					"@1.50": {
						slidesPerView: 6,
						spaceBetween: 50,
					},
				}}
				className="mySwiper"
			>
				{listPartners.map((item, index) => (
					<div key={index} className="col-span-2">
						<SwiperSlide>
							<div className="w-full h-[96px] relative">
								<Image
									src={`/images/${item?.url}`}
									className="object-contain"
									fill
									alt={item.name || ""}
								/>
							</div>
						</SwiperSlide>
					</div>
				))}
			</Swiper>
		</div>
	);
};

export default ListPartner;
