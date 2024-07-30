import { CarouselCoursesRecommended } from '@/components/CarouselCoursesRecommended';
import { CarouselHomeWithNumber } from '@/components/CarouselHomeWithNumber';
import HomeSlice from '@/components/HomeSlice';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <main className="max-w-desktop h-full">
      <HomeSlice/>
      <div className="mx-auto w-4/5 h-full">
        <CarouselHomeWithNumber />
        <CarouselCoursesRecommended />
      </div>
    </main>
  );
}
