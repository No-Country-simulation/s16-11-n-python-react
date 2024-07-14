import { DefaultParams } from 'wouter';

interface Props {
  params: DefaultParams;
}

export function CourseDetail({ params }: Props) {
  const { id } = params as { id: string };

  const data: Record<string, string> = {
    '21': 'Python desde Cero hasta Backend',
  };

  return (
    <main>
      <section className="bg-zinc-700 bg-cover bg-center bg-no-repeat max-w-desktop aspect-video mx-auto w-full bg-[url('https://i.ytimg.com/vi/344uwF1z2Gg/maxresdefault.jpg')] bg-blend-multiply flex items-center">
        <div className="max-w-1600 mx-auto pt-32 w-full">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl text-balance w-3/5">
            Curso de {data[id]}
          </h1>
          <p className="text-3xl font-bold">{37} horas</p>
          <p className="text-4xl text-zinc-400 mt-2 font-bold">
            {75} lecciones
          </p>
        </div>
      </section>
      <section className="flex gap-10 h-96 max-w-7xl mx-auto p-10 max-w-">
        <div>
          <h2>Name Teacher</h2>
          <div></div>
        </div>
        <div>
          <h2 className="text-4xl">Descripcion curso</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore
            ipsam voluptates ratione, architecto officia sit quisquam tempore
            reiciendis aut incidunt explicabo! Minus commodi nemo architecto ab
            cupiditate molestiae odio doloremque nisi quis corrupti debitis
            vitae qui officiis suscipit ullam eligendi dicta nihil harum
            corporis, et officia molestias vero saepe esse. Deserunt iusto ad
            quia omnis itaque dolore, numquam magni blanditiis dicta mollitia,
            sequi a asperiores doloremque exercitationem inventore, recusandae
            officiis fuga possimus nesciunt! Ad perspiciatis impedit tenetur.
            Iusto alias nulla inventore molestias recusandae illum illo quisquam
            minus voluptatum ad. Incidunt, voluptatibus placeat facere excepturi
            fugit, id obcaecati explicabo voluptatum tenetur, ut cupiditate illo
            aliquid culpa cum. Velit in reprehenderit, molestias dolores itaque
            ullam praesentium neque aliquid debitis ipsum alias.
          </p>
          <h3 className="text-3xl">Qué aprenderas</h3>
        </div>
      </section>
    </main>
  );
}
