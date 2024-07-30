import { Card } from '@/components/Card';
import { getCourses } from '@/services/api';
import { Course } from '@/types/types';
import { max250Chars } from '@/utils/formatStrings';
import { useEffect, useState } from 'react';

export default function AllCourses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    (async () => {
      const coursesData = await getCourses();
      setCourses(coursesData);
    })();
  }, []);

  return (
    <main className="max-w-8xl mx-auto grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] py-20">
      {courses?.length > 0 ? (
        courses?.map((course) => (
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
        <h1>No hay cursos aún</h1>
      )}
    </main>
  );
}
