import BookCard from '../Card/BookCard';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './BookCarousel.css'


function BookCarousel() {
  return (
    <Swiper 
      modules={[Navigation]}
      spaceBetween={20}
      navigation
      slidesPerView={4}
    >
      <SwiperSlide>
        <BookCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookCard />
      </SwiperSlide>
    </Swiper>
  )
}

export default BookCarousel