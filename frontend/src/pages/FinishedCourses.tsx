import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
        className="block
        scroll-smooth w-full h-[100%] pt-20"
      >
        <div className="w-[80%] mx-auto">
          <h2 className="text-lg font-bold p-5">Cursos finalizados</h2>
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="flex flex-col justify-around md:mx-3 mx-auto w-[263px] h-[147px] mb-5">
                <CardHeader>
                  <CardTitle>Course {index + 1} Title</CardTitle>
                  <CardDescription>Provisorio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-red-600 w-[90%] h-12 mx-auto rounded-md">Course Imagen</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
