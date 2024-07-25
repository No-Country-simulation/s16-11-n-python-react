import { BsRobot } from 'react-icons/bs';
import { Link } from 'wouter';
import { RiHome2Line } from 'react-icons/ri';

export function ErrorPage() {
  return (
    <main className="max-w-desktop mx-auto">
      <h1 className="text-4xl text-center mt-24">
        <BsRobot className="block mx-auto text-8xl mb-2" />
        <b>404</b>
        <h2>Página no encontrada</h2>
        <Link to="/" className="text-lg">
          <span className="flex items-center justify-center mt-2 gap-2 hover:scale-110">
            <RiHome2Line className="text-2xl" />
            Volver al inicio
          </span>
        </Link>
      </h1>
    </main>
  );
}
