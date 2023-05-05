import { Autoplay,Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import './custom-carousel.css'
import CarouselSlide from './CarouselSlide';

function Carousel() {
  return (
    <section className='lg:col-span-2 rounded-2xl overflow-hidden'>
      <Swiper 
        className='h-full w-full'
        modules={[Pagination, Autoplay]} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{clickable: true}}>
        <SwiperSlide className='bg-cover px-16 bg-slide-1 flex bg-no-repeat'>
          <CarouselSlide />
        </SwiperSlide>
        <SwiperSlide className='bg-cover px-16 bg-slide-1 flex bg-no-repeat'>
          <CarouselSlide />
        </SwiperSlide>
        <SwiperSlide className='bg-cover px-16 bg-slide-1 flex bg-no-repeat'>
          <CarouselSlide />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Carousel