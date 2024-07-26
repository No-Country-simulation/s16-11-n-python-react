
import { Card } from '@/components/Card';
import { useEffect } from 'react';

const card = {
  courseId: 1,
  courseName: 'Curso JavaScript: 33. Módulos ( import / export )',
  courseThumbnail: 'https://img.youtube.com/vi/0GEUyQXe3NI/mqdefault.jpg',
  courseDescription: 'En este video te enseño a importar y exportar módulos en #JavaScript.',
  publicationDate: '24 mar 2020',
};

export const CoursesInProgress = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <main className="flex flex-col items-center w-full">
      <div
        className="block
      scroll-smooth w-full h-[100%] pt-20"
      >
        <div className="w-[80%] mx-auto">
          <h2 className="text-lg font-bold p-5">Cursos en progreso</h2>
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 9 }).map((_,) => (
              <Card {...card}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
