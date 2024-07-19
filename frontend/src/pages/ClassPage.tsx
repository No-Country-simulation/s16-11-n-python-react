import { DefaultParams, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { GoArrowLeft } from 'react-icons/go';
import { BsFlag } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { fillLeftZeros } from '@/utils/formatStrings';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Props {
  params: DefaultParams;
}

// TODO: Add youtube lite npm
export function ClassPage({ params }: Props) {
  const { id } = params as { id: string };
  const videos = new Array(125).fill(1);

  return (
    <main className="max-w-8xl mx-auto flex gap-6 font-semibold pt-14">
      <section className="flex-[7]">
        <Button
          asChild
          variant="outline"
          className="text-xl border dark:border-zinc-500 px-4 py-6"
        >
          <Link href="/course/a21">
            <GoArrowLeft className="text-2xl mr-2" />
            Volver
          </Link>
        </Button>
        <div className="w-full aspect-video bg-white border border-gray-300 mt-6 rounded-md">
          <p className="text-black text-4xl">Video</p>
        </div>
        <div className="py-8 mt-4 border border-white">
          <h1 className="text-3xl">
            Video name {id} - Lorem ipsum dolor sit amet consectetur.
          </h1>
        </div>
      </section>
      <section className="flex-[3] border border-zinc-500 rounded-xl px-3 pb-3 shrink-0">
        <h4 className="mt-5">Lista de contenidos</h4>
        <div className="mt-4 pl-4 dark:bg-zinc-950 pb-4 pt-4">
          <h3 className="flex items-center gap-2">
            <span className="dark:bg-zinc-500 border border-zinc-500 rounded-full flex items-center justify-center h-7 w-7">
              <BsFlag className="text-md" />
            </span>
            <span>Ruta de conocimiento</span>
          </h3>
          <h2 className="text-2xl mt-2">Curso {id}</h2>
        </div>
        <ScrollArea className="w-full aspect-[9/11.5] mt-4 ">
          <div className=" flex flex-col gap-3 pl-2 pr-4">
            {videos.map((_, idx) => (
              <Link
                key={`td-${idx}`}
                href={`/class/${idx}`}
                className="p-2 text-lg flex justify-between items-center gap-6 dark:hover:bg-zinc-800 hover:bg-zinc-400 transition-colors duration-150"
              >
                <span className="flex items-center gap-3">
                  <p className="text-end w-8">{fillLeftZeros(idx + 1)}.</p>
                  <p>Curso lorem {idx + 1} lorem</p>
                </span>
                <FaCheckCircle
                  className={`text-xl flex-none ${
                    idx < 10 ? 'text-green-500' : 'text-white'
                  }`}
                />
              </Link>
            ))}
          </div>
        </ScrollArea>
      </section>
    </main>
  );
}
