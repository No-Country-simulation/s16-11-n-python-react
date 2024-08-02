import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useStore } from '@/contexts/store';
import { coursesSlice } from '@/utils/arrayCourses';
import { Course } from '@/types/types';

export default function HomeSlice() {
  const allcourses = useStore((state)=>state.courses)
  const [courses, setCourses] = useState<Course[]>([])
  useEffect(() => {
    setCourses(coursesSlice(allcourses).slice(0,9))
  }, [])
  
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
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <img
              src={course.thumbnail}
              className="h-[85vh] max-h-[815px] object-cover mx-auto"
              alt={course.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
