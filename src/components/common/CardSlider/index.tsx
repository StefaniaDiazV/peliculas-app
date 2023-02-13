import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.min.css";

const CardSlider = () => {
  return (
    <div className="container py-4 px-4 justify-content-center">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export { CardSlider }