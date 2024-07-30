import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TestArrayCourses } from './TestArrayCourses';

export default function HomeSlice() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[90vh] w-4/5"
      >
        {TestArrayCourses.map((course) => (
          <SwiperSlide>
            <img src={course.courseThumbnail} className='h-[85vh] object-cover mx-auto'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
