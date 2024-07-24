import { useTheme } from '@/components/ThemeProvider';
import { FaLinkedin, FaTwitch, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { DefaultParams, Link } from 'wouter';

interface Props {
  params: DefaultParams;
}

export function CourseDetail({ params }: Props) {
  const { id } = params as { id: string };
  const { theme } = useTheme();

  const titleClasses = 'text-4xl font-semibold';
  const socialLogoClasses = 'text-5xl duration-300 hover:scale-125';
  const courseColor = '#9d43de7a';
  const backgroundClassesSection = {
    background:
      theme === 'dark'
        ? `radial-gradient(circle at 0% 10%, ${courseColor}, #09090b 18%)`
        : `radial-gradient(circle at 0% 10%, ${courseColor}, #fff 18%)`,
  };

  const data: Record<string, Record<string, string | number>> = {
    a21: {
      title: 'Python desde Cero hasta Backend',
      hours: 37,
      lessons: 75,
    },
  };
  const courses = new Array(58).fill(1);

  return (
    <main>
      <section className="course-detail cover">
        <div className="max-w-1600 mx-auto pt-32 w-full">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-7xl text-balance w-3/5">
            Curso de {data[id]?.title}
          </h1>
          <p className="text-3xl font-bold mt-3">{data[id]?.hours} horas</p>
          <p className="text-4xl text-zinc-400 mt-5 font-bold">{data[id]?.lessons} lecciones</p>
        </div>
      </section>
      <section className="max-w-desktop mx-auto" style={backgroundClassesSection}>
        <div className="flex items-start gap-36 max-w-8xl mx-auto pt-28 pb-10">
          <div className="flex-1 sticky transition-transform px-6 top-28">
            <img
              src="https://yt3.ggpht.com/ytc/AIdro_lPBcTSzb5NqMhKQSo6aaTPcnPM2EZhvhdcQi0YvPmflQ=s800-c-k-c0x00ffffff-no-rj"
              alt="photo of midu"
              className="block w-full"
            />
            <div className="px-4">
              <h2 className="text-3xl text-center mt-6 font-bold">Miguel Angel Duran</h2>
              <div className="flex justify-between my-10">
                <a href="/">
                  <FaYoutube className={socialLogoClasses} />
                </a>
                <a href="/">
                  <FaLinkedin className={socialLogoClasses} />
                </a>
                <a href="/">
                  <FaXTwitter className={socialLogoClasses} />
                </a>
                <a href="/">
                  <FaTwitch className={socialLogoClasses} />
                </a>
              </div>
            </div>
            <p className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates adipisci blanditiis error eligendi
              veritatis ullam quisesse commodi fugit consequuntur. Repellat, at asperiores eaque dignissimos sed
              sapiente magni? Eaque, suscipit.
            </p>
          </div>
          <div className="flex-[3]">
            <h2 className={titleClasses}>Descripcion del curso</h2>
            <p className="pl-4 mt-4 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore ipsam voluptates ratione, architecto
              officia sit quisquam tempore reiciendis aut incidunt explicabo! Minus commodi nemo architecto ab
              cupiditate molestiae odio doloremque nisi quis corrupti debitis vitae qui officiis suscipit ullam eligendi
              dicta nihil harum corporis, et officia molestias vero saepe esse. Deserunt iusto ad quia omnis itaque
              dolore, numquam magni blanditiis dicta mollitia, sequi a asperiores doloremque exercitationem inventore,
              recusandae officiis fuga possimus nesciunt!
            </p>
            <h3 className={`${titleClasses} mt-28 mb-4`}>Qué aprenderas</h3>
            <div>
              {courses.map((_, idx) => (
                <Link
                  key={idx}
                  className="block my-2 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-lg"
                  href={`/class/${idx}`}
                >
                  Class {idx + 1}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
