import { useTheme } from '@/components/ThemeProvider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getCourseDetail } from '@/services/api';
import { ICourseDetail } from '@/types/types';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaTwitch, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { DefaultParams, Link } from 'wouter';
import ComponentsText from '@/components/ComponentsText';
import Loader from '@/components/Loader';
import { useScroll } from '@/hooks/useScroll';

interface Props {
  params: DefaultParams;
}

export function CourseDetail({ params }: Props) {
  const { id } = params as { id: string };
  const { theme } = useTheme();
  const [course, setCourse] = useState<ICourseDetail | null>(null);
  const [loading, setLoading] = useState(false);

  useScroll();

  const titleClasses = 'text-4xl font-semibold';
  const socialLogoClasses = 'text-5xl transition-transform duration-300 hover:scale-125';
  const courseColor = '#9d43de7a';
  const backgroundColor = theme === 'dark' ? '#09090b' : '#fff';

  const backgroundGradient = {
    background: `radial-gradient(circle at 0% 10%, ${courseColor}, ${backgroundColor} 18%)`,
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getCourseDetail(id);
      setCourse(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <Loader className="py-36" />;

  return (
    <main>
      <section
        className="bg-center max-w-desktop h-screen max-h-[916px] aspect-video mx-auto w-full flex items-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, #09090b 5%, #09090baa 10%), url(${course?.thumbnail})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="max-w-1600 mx-auto pt-32 w-full">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-7xl text-balance w-3/5">
            {course?.title}
          </h1>
          <p className="text-3xl font-bold mt-3">
            {course?.classes.length ? Math.floor(course?.classes.length * 0.4) : 0} horas
          </p>
          <p className="text-4xl text-zinc-400 mt-5 font-bold">{course?.classes.length} lecciones</p>
        </div>
      </section>
      <section className="max-w-desktop mx-auto" style={backgroundGradient}>
        <div className="flex items-start gap-28 max-w-8xl mx-auto pt-28 pb-10 md:flex-row flex-col">
          <div className="flex-1 px-6 md:sticky">
            <img src={course?.author.thumbnail} alt={`photo of ${course?.author.customUrl}`} className="block w-full" />
            <div className="px-4">
              <h2 className="text-3xl text-center mt-6 font-bold">{course?.author.name}</h2>
              <div className="flex justify-between gap-2 my-10">
                <a href="/" className={socialLogoClasses}>
                  <FaYoutube />
                </a>
                <a href="/" className={socialLogoClasses}>
                  <FaLinkedin />
                </a>
                <a href="/" className={socialLogoClasses}>
                  <FaXTwitter />
                </a>
                <a href="/" className={socialLogoClasses}>
                  <FaTwitch />
                </a>
              </div>
            </div>
            <ComponentsText text={course?.author.description} />
          </div>
          <div className="flex-[3] pb-6">
            <h2 className={titleClasses}>Descripcion del curso</h2>
            <ComponentsText text={course?.description} className="mt-5 font-semibold" />
            <h3 className={`${titleClasses} mt-20 mb-4`}>Qué aprenderas</h3>
            <ScrollArea className="w-full aspect-[16/17] p-2 pr-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                {course?.classes.map((classItem) => (
                  <article key={classItem.id} className="flex flex-col items-start gap-2">
                    <Link className="aspect-video w-full bg-zinc-600" href={`/clase/${classItem.id}`}>
                      <img
                        src={classItem.thumbnail}
                        alt={`Thumbnail of the course ${classItem.title}`}
                        className="block aspect-video"
                        style={{ objectFit: 'cover' }}
                      />
                    </Link>
                    <Link className="text-lg font-semibold hover:underline" href={`/clase/${classItem.id}`}>
                      {classItem.title}
                    </Link>
                  </article>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>
    </main>
  );
}
