import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card } from './Card';
import { randomCourses } from '@/utils/arrayCourses';
import { max250Chars } from '@/utils/formatStrings';

export const CarouselCoursesRecommended = () => {
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
          {randomCourses.map((course, index) => (
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
