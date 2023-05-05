import Carousel from '../Carousel/Carousel'
import HeaderBanner from './HeaderBanner'


function HomePageHeader() {
  return (
    <header>
      <section className='container mx-auto my-20 gap-5 grid lg:grid-cols-3 h-[40rem]'>
        <Carousel />
        <HeaderBanner />
      </section>
    </header>
  )
}

export default HomePageHeader