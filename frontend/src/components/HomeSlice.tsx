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
  const allcourses = useStore((state) => state.courses);
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    setCourses(coursesSlice(allcourses).slice(0, 9));
  }, []);

  return (
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
      className="lg:max-h-[850px] lg:h-[90vh] xl:w-[80%] md:h-[70vh] md:w-[90%] h-[400px] w-[95%]"
    >
      {courses.map((course) => (
        <SwiperSlide key={course.id}>
          <img src={course.thumbnail} className="lg:h-[85vh] lg:max-h-[815px] md:h-[65vh] md:w-[90%] h-[360px] object-cover mx-auto" alt={course.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
