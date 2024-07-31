import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { TestArrayCourses } from './TestArrayCourses';
import { Card } from './Card';

export const CarouselCoursesRecommended = () => {
  return (
    <div className="h-full flex flex-col my-5 ">
      <h3 className='text-xl font-bold p-2'>Cursos recomendados:</h3>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent className="h-full w-full mx-auto">
          {TestArrayCourses.map((card, index) => (
            <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/4 my-1 ">
              <Card {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
