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
        className="max-h-[850px] h-[90vh] xl:w-[80%] 2xl:w-[90%]"
      >
        {TestArrayCourses.map((course) => (
          <SwiperSlide>
            <img src={course.courseThumbnail} className='h-[85vh] max-h-[815px] object-cover mx-auto' alt={course.courseName}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
