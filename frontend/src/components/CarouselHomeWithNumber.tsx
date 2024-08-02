import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card } from './Card';
import { nineCourses } from '@/utils/arrayCourses';
import { max250Chars } from '@/utils/formatStrings';
import { useStore } from '@/contexts/store';
import { useEffect, useState } from 'react';
import { Course } from '@/types/types';

export const CarouselHomeWithNumber = () => {
  const allcourses = useStore((state)=>state.courses)
  const [courses, setCourses] = useState<Course[]>([])
  useEffect(() => {
    setCourses(nineCourses(allcourses))
  }, [])
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent className="h-full my-1">
        {courses.map((course, index) => (
          <CarouselItem key={course.id} className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-full">
            <div className="w-full flex items-center">
              <p className="xl:text-8xl text-7xl font-extrabold">{index + 1}</p>
              <div className="ml-[-10px] z-10">
                <Card
                  key={course.id}
                  courseId={course.id}
                  courseName={course.name}
                  courseDescription={max250Chars(course.description)}
                  courseThumbnail={course.thumbnail}
                  publicationDate={course.publishedAt}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
