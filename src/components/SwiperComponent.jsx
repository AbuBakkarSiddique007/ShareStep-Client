import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from '../pages/Slide'

import bgimg1 from '../assets/slideOne.jpg'
import bgimg2 from '../assets/slideTwo.jpg'
import bgimg3 from '../assets/slideThree.jpg'
import bgimg4 from '../assets/slideFour.jpg'

export default function SwiperComponent() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Make a Difference — Volunteer Today'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Support Communities & Spread Kindness'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Together We Can Build a Better Future'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg4}
            text='Together We Can Build a Better Future'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
