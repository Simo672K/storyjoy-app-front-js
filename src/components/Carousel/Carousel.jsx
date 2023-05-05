import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';

function Carousel() {
  return (
    <section className='lg:col-span-2 rounded-2xl overflow-hidden'>
      <Swiper className='h-full w-full' modules={[Pagination]} pagination={{clickable: true}}>
        <SwiperSlide className='bg-cover bg-slide-1  bg-no-repeat'>
          Hello
        </SwiperSlide>
        <SwiperSlide>
          Hi
        </SwiperSlide>
        <SwiperSlide>
          Hello
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Carousel