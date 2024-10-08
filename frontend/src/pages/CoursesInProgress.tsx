import { Card } from '@/components/Card';
import { EmptyCourses } from '@/components/EmptyCourses';
import { useScroll } from '@/hooks/useScroll';
import { randomCourses } from '@/utils/arrayCourses';
import { max250Chars } from '@/utils/formatStrings';

export const CoursesInProgress = () => {
  useScroll();
  const courseState = 'Cursos en progreso';

  return (
    <main className="flex flex-col items-center w-full">
      <div className="max-w-desktop h-full py-20">
        <div className="w-[80%] mx-auto">
          <h2 className="text-lg font-bold m-5 text-start w-full">{courseState}</h2>
          <div className="w-full h-full grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
            {randomCourses.length > 0 ? (
              randomCourses
                .map((course) => (
                  <Card
                    key={course.id}
                    courseId={course.id}
                    courseName={course.name}
                    courseDescription={max250Chars(course.description)}
                    courseThumbnail={course.thumbnail}
                    publicationDate={course.publishedAt}
                  />
                ))
            ) : (
              <EmptyCourses courseState={courseState} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
