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
      <CarouselContent className="h-full my-5">
        {TestArrayCourses.map((card, index) => (
          <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/4 h-full">
            <div className="w-full flex items-center">
              <p className="text-6xl font-extrabold">{index + 1}</p>
              <div className='ml-[-10px] my-1 z-10'>
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
