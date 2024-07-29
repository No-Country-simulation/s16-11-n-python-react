import { Card } from '@/components/Card';
import { EmptyCourses } from '@/components/EmptyCourses';
import { TestArrayCourses } from '@/components/TestArrayCourses';
import { useEffect } from 'react';

export const FinishedCourses = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const courseState = 'Cursos finalizados';

  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-desktop h-full py-20">
        <div className="w-[80%] mx-auto">
          <h2 className="text-lg font-bold p-5">{courseState}</h2>
          <div className="w-full h-full grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
            {TestArrayCourses.length > 0 ? (
              TestArrayCourses.slice(0, 5).map((course, index) => <Card key={index} {...course} />)
            ) : (
              <EmptyCourses courseState={courseState} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
