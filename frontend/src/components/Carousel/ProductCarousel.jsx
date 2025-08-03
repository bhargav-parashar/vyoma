// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const ProductCarousel = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      className="h-full w-full"
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <img src={`/assets/${images[0]}`} className="w-[100%]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`/assets/${images[1]}`} className="h-[100%]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`/assets/${images[0]}`} className="h-[100%] " />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`/assets/${images[1]}`} className="h-[100%]" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductCarousel;
