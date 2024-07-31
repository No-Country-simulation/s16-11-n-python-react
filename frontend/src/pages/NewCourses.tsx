import { Card } from '@/components/Card';
import { TestArrayCourses } from '@/components/TestArrayCourses';
import { useScroll } from '@/hooks/useScroll';

export const NewCourses = () => {
  useScroll();

  return (
    <main className="flex flex-col items-center w-full">
      <div
        className="max-w-desktop h-full py-20"
      >
        <div className="w-[80%] mx-auto">
          <h2 className="text-lg font-bold p-5">Cursos nuevos</h2>
          <div className="w-full h-full grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
          {TestArrayCourses.map((course,index) => (
              <Card key={index} {...course}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
