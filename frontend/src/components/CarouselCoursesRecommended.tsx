import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card } from './Card';
import { nineCourses } from '@/utils/arrayCourses';
import { max250Chars } from '@/utils/formatStrings';
import { useStore } from '@/contexts/store';
import { useEffect, useState } from 'react';
import { Course } from '@/types/types';

export const CarouselCoursesRecommended = () => {
  const allcourses = useStore((state)=>state.courses)
  const [courses, setCourses] = useState<Course[]>([])
  useEffect(() => {
    setCourses(nineCourses(allcourses))
  }, [])
  return (
    <div className="h-full flex flex-col my-5 ">
      <h3 className="text-xl font-bold p-2">Cursos recomendados:</h3>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent className="h-full w-full mx-auto">
          {courses.map((course, index) => (
            <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/4 my-1 ">
              <Card
                key={course.id}
                courseId={course.id}
                courseName={course.name}
                courseDescription={max250Chars(course.description)}
                courseThumbnail={course.thumbnail}
                publicationDate={course.publishedAt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
