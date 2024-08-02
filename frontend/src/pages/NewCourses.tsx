import { Card } from '@/components/Card';
import { useStore } from '@/contexts/store';
import { useScroll } from '@/hooks/useScroll';
import { max250Chars } from '@/utils/formatStrings';

export const NewCourses = () => {
  const allCourses = useStore((state) => state.courses);

  useScroll();

  return (
    <main className="flex flex-col items-center w-full">
      <div className="max-w-desktop h-full py-20">
        <div className="w-[80%] mx-auto">
          <h2 className="text-lg font-bold p-5">Cursos nuevos</h2>
          <div className="w-full h-full grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
            {allCourses.map((course) => (
              <Card
                key={course.id}
                courseId={course.id}
                courseName={course.name}
                courseDescription={max250Chars(course.description)}
                courseThumbnail={course.thumbnail}
                publicationDate={course.publishedAt}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
