import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const IntroductionCarousel = () => {
  const houseImages = [
    { src: "/house1.png", alt: "House 1" },
    { src: "/house2.png", alt: "House 2" },
    { src: "/house3.png", alt: "House 3" },
    { src: "/house4.png", alt: "House 4" },
  ];

  return (
    <div className="w-full mt-10">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className="w-full"
      >
        {houseImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-auto">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IntroductionCarousel;
