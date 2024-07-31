import { CarouselCoursesRecommended } from '@/components/CarouselCoursesRecommended';
import { CarouselHomeWithNumber } from '@/components/CarouselHomeWithNumber';
import HomeSlice from '@/components/HomeSlice';
import { useScroll } from '@/hooks/useScroll';

export function Home() {
  useScroll();

  return (
    <main className="max-w-desktop h-full mx-auto">
      <HomeSlice />
      <div className="mx-auto w-4/5 h-full">
        <CarouselHomeWithNumber />
        <CarouselCoursesRecommended />
      </div>
    </main>
  );
}
