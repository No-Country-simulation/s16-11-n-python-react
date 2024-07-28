import { Card } from '@/components/Card';
import { TestArrayCourses } from '@/components/TestArrayCourses';
import { useEffect } from 'react';

export const FinishedCourses = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="max-w-desktop h-full py-20"
      >
        <div className="w-[80%] mx-auto">
          <h2 className="text-lg font-bold p-5">Cursos finalizados</h2>
          <div className="w-full h-full grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
          {TestArrayCourses.slice(0, 5).map((course,index) => (
              <Card key={index} {...course}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
