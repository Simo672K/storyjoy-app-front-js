import { Navigation } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react"
import Avatar from "../Avatar/Avatar";
import "swiper/css"

function GenreCarousel({categories, settings}) {
  const {prevEl, nextEl} = settings;
  return (
    <Swiper 
      modules={[Navigation]}
      slidesPerView={"auto"}
      navigation={{
        nextEl,
        prevEl
      }}
      >
      {categories.map((category, id) => (
        <SwiperSlide key={id} className="w-fit">
          <div className="flex flex-col items-center p-4">
            <Avatar
              img={`https://api.dicebear.com/6.x/thumbs/png?seed=${category}`}
            />
            <h5 className="font-bold w-24 text-center">{category}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GenreCarousel;
