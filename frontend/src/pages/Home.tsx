import { SwiperSlider } from '@/components/SwiperSlider';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const swiperImagesExamples = [
  {
    urlImg: 'https://i.ytimg.com/vi/344uwF1z2Gg/maxresdefault.jpg',
  },
  {
    urlImg:
      'https://i.ytimg.com/vi/zuKbR4Q428o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD3uC1-RwzfTIjrGk-3nR5zEz0hCw',
  },
  {
    urlImg: 'https://i.ytimg.com/vi/LfvNmswoMmA/maxresdefault.jpg',
  },
  {
    urlImg:
      'https://i.ytimg.com/vi/s_4ZrtQs8Do/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDsA7RmIVtSr-oDuN4HK--q_MzQJQhttps://i.ytimg.com/vi/s_4ZrtQs8Do/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDsA7RmIVtSr-oDuN4HK--q_MzQJQ',
  },
  {
    urlImg: 'https://i.ytimg.com/vi/K1pv7JCU-40/maxresdefault.jpg',
  },
  {
    urlImg: 'https://patriksvensson.se/posts/2017/11/using-embedded-resources-in-xunit-tests-social.png',
  },
  {
    urlImg: 'https://i.ytimg.com/vi/l32bsaIDoWk/maxresdefault.jpg',
  },
  {
    urlImg:
      'https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/11771/courses/30661/1681912955544thumbnail%20for%20JS%20Tutorial%20for%20beginners.png',
  },
];

export function Home() {
  return (
    <>
      <Button asChild>
        <Link href="/curso/a21" className="inline-block">
          Curso
        </Link>
      </Button>
      {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">TechIAdemic Home</h1> */}
      <main>
        <div className="flex min-h-[1000px] flex-col container">
          <section className="mx-auto w-full max-w-screen-xl max-h-[512px] h-[512px] px-8 text-black cursor-grab">
            <SwiperSlider swiperImages={swiperImagesExamples} />
          </section>
        </div>
      </main>
    </>
  );
}
