import BookCard from '../Card/BookCard';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './BookCarousel.css'



function BookCarousel({prev, next}) {
  return (
    <Swiper 
      modules={[Navigation]}
      spaceBetween={20}
      navigation= {{
        prevEl: prev,
        nextEl: next
      }}
      slidesPerView={'auto'}
    >
      {
        Array(10).fill(null).map((elem, id)=>{
          return(
            <SwiperSlide key={id}>
              <div>
              <p className='text-gray-200 text-xl font-bold'>
                {`${id+1}`.padStart(2, '0')}
              </p>
              <BookCard />
              </div>
            </SwiperSlide>
          )
        })
      }
      
    </Swiper>
  )
}

export default BookCarousel