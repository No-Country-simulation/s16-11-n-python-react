import { useEffect, useRef, useState } from 'react';
import { DefaultParams, Link } from 'wouter';
import { IoIosArrowBack } from 'react-icons/io';
import { FaCheckCircle } from 'react-icons/fa';
import { GoArrowLeft } from 'react-icons/go';
import { BsFlag } from 'react-icons/bs';
import { fillLeftZeros } from '@/utils/formatStrings';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getClassData } from '@/services/api';
import { ClassData } from '@/types/types';

interface Props {
  params: DefaultParams;
}

export function ClassPage({ params }: Props) {
  const { id } = params as { id: string };
  const videos = new Array(125).fill(1);
  const classRef = useRef<HTMLAnchorElement>(null);

  const [toggleContentList, setToggleContentList] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [classData, setClassData] = useState<ClassData | null>(null);

  const isCurrentClass = (classId: string) => classId === id;

  useEffect(() => {
    (async () => {
      const data = await getClassData(id);
      setClassData(data);
    })();
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      classRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 0);
  }, [toggleContentList, id]);

  return (
    <main className="max-w-[1000px] mx-auto font-semibold pt-14 mb-40">
      <section className="flex justify-between">
        <Button asChild variant="outline" className="text-xl border dark:border-zinc-500 px-4 py-6">
          <Link href={`/curso/${classData?.course.id}`}>
            <GoArrowLeft className="text-2xl mr-2" />
            Volver
          </Link>
        </Button>
        <Button
          onClick={() => setToggleContentList(!toggleContentList)}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          variant="outline"
          className="text-lg border dark:border-zinc-500 px-1 w-8 hover:w-48 transition-all duration-150 flex justify-between rounded-none"
        >
          <IoIosArrowBack />
          {isButtonHovered && <span className="animate-show-item pr-1">Lista de contenidos</span>}
        </Button>
      </section>
      <section className="flex gap-6">
        <div className="flex-[8]">
          <div className="w-full aspect-video bg-gray-600 border border-gray-300 mt-6 rounded-md">
            <img src={classData?.class.thumbnail} alt="" />
          </div>
          <div className="py-4 mt-4">
            <h1 className="text-2xl">{classData?.class.title}</h1>
          </div>
        </div>
        {toggleContentList && (
          <div className="flex-[2.5] rounded-xl p-2 pr-1 shrink-0 border border-zinc-800">
            <div className="flex justify-between">
              <h4 className="text-sm">Lista de contenidos</h4>
              <Button
                onClick={() => setToggleContentList(!toggleContentList)}
                className="border dark:border-zinc-500 py-1 px-3 h-auto font-normal"
                variant="outline"
              >
                Ocultar
              </Button>
            </div>
            <div className="dark:bg-zinc-950 py-3">
              <h3 className="flex items-center gap-2">
                <span className="dark:bg-zinc-800 rounded-full flex items-center justify-center h-7 w-7 p-1">
                  <BsFlag className="text-md" />
                </span>
                <span className="text-sm">Ruta de conocimiento</span>
              </h3>
              <h2 className="text-lg mt-4">{classData?.course.title}</h2>
            </div>
            <ScrollArea className="w-full aspect-[9/15.5] mt-4">
              <div className="flex flex-col gap-2 pr-[0.75rem]">
                {classData?.classes.map((classItem, idx) => (
                  <Link
                    key={classItem.id}
                    ref={isCurrentClass(classItem.id) ? classRef : undefined}
                    href={`/clase/${classItem.id}`}
                    className={`p-1 text-sm flex justify-between items-center gap-2 transition-colors duration-150 dark:hover:bg-zinc-700 hover:bg-zinc-300 ${isCurrentClass(classItem.id) ? ' bg-zinc-200 dark:bg-zinc-800 rounded-lg' : ''}`}
                  >
                    <span className="flex items-center gap-1">
                      <p className="text-end w-8">{fillLeftZeros(idx + 1)}.</p>
                      <img
                        src={classItem.thumbnail}
                        alt={`Thumbnail of the course ${classItem.title}`}
                        className="aspect-video h-12 rounded bg-zinc-500"
                      />
                      <p>{classItem.title}</p>
                    </span>
                    <FaCheckCircle
                      className={`text-xl flex-none ${idx < 5 ? 'text-green-500' : 'text-zinc-400 dark:text-white'}`}
                    />
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </section>
    </main>
  );
}
