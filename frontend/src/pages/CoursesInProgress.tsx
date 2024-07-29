import { Card } from '@/components/Card';
import { EmptyCourses } from '@/components/EmptyCourses';
import { TestArrayCourses } from '@/components/TestArrayCourses';
import { useEffect } from 'react';

export const CoursesInProgress = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const courseState = 'Cursos en progreso';

  return (
    <main className="flex flex-col items-center w-full">
      <div className="max-w-desktop h-full py-20">
        <div className="w-[80%] mx-auto">
          <h2 className="text-lg font-bold m-5 text-start w-full">{courseState}</h2>
          <div className="w-full h-full grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
            {TestArrayCourses.length > 0 ? (
              TestArrayCourses.slice(5, 9).map((course, index) => <Card key={index} {...course} />)
            ) : (
              <EmptyCourses courseState={courseState} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
