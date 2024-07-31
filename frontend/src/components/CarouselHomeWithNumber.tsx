import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { TestArrayCourses } from './TestArrayCourses';
import { Card } from './Card';

export const CarouselHomeWithNumber = () => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent className="h-full my-1">
        {TestArrayCourses.map((card, index) => (
          <CarouselItem key={index} className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-full">
            <div className="w-full flex items-center">
              <p className="xl:text-8xl text-7xl font-extrabold">{index + 1}</p>
              <div className="ml-[-10px] z-10">
                <Card {...card} />
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
