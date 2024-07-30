import { useTheme } from '@/components/ThemeProvider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useEffect } from 'react';
import { FaLinkedin, FaTwitch, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { DefaultParams, Link } from 'wouter';

interface Props {
  params: DefaultParams;
}

export function CourseDetail({ params }: Props) {
  const { id } = params as { id: string };
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({top:0,behavior:'smooth'})
  }, []);

  const titleClasses = 'text-4xl font-semibold';
  const socialLogoClasses = 'text-5xl transition-transform duration-300 hover:scale-125';
  const courseColor = '#9d43de7a';
  const backgroundColor = theme === 'dark' ? '#09090b' : '#fff';

  const backgroundGradient = {
    background: `radial-gradient(circle at 0% 10%, ${courseColor}, ${backgroundColor} 18%)`,
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
      <section
        className="bg-center max-w-desktop aspect-video mx-auto w-full flex items-center text-white"
        style={{
          background: `linear-gradient(to bottom, #09090b 5%, #09090b5f 10%), url(${'https://i.ytimg.com/vi/344uwF1z2Gg/maxresdefault.jpg'})`,
        }}
      >
        <div className="max-w-1600 mx-auto pt-32 w-full">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-7xl text-balance w-3/5">
            Curso de {data[id]?.title}
          </h1>
          <p className="text-3xl font-bold mt-3">{data[id]?.hours} horas</p>
          <p className="text-4xl text-zinc-400 mt-5 font-bold">{data[id]?.lessons} lecciones</p>
        </div>
      </section>
      <section className="max-w-desktop mx-auto" style={backgroundGradient}>
        <div className="flex items-start gap-36 max-w-8xl mx-auto pt-28 pb-10 md:flex-row flex-col">
          <div className="flex-1 px-6 md:sticky">
            <img
              src="https://yt3.ggpht.com/ytc/AIdro_lPBcTSzb5NqMhKQSo6aaTPcnPM2EZhvhdcQi0YvPmflQ=s800-c-k-c0x00ffffff-no-rj"
              alt={`photo of ${'midu'}`}
              className="block w-full"
            />
            <div className="px-4">
              <h2 className="text-3xl text-center mt-6 font-bold">Miguel Angel Duran</h2>
              <div className="flex justify-between my-10">
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
            <p className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates adipisci blanditiis error eligendi
              veritatis ullam quisesse commodi fugit consequuntur. Repellat, at asperiores eaque dignissimos sed
              sapiente magni? Eaque, suscipit.
            </p>
          </div>
          <div className="flex-[3] pb-6">
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
            <ScrollArea className="w-full aspect-[16/17] p-2 pr-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                {courses.map((_, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-2">
                    <Link className="aspect-video w-full bg-zinc-600" href={`/clase/${idx}`}>
                      <img src="/" alt={`Thumbnail of the course ${idx}`} className="block" />
                    </Link>
                    <Link className="text-lg font-semibold hover:underline" href={`/clase/${idx}`}>
                      Class {idx + 1}
                    </Link>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>
    </main>
  );
}
