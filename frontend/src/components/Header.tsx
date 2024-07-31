import { Link } from 'wouter';
import { UserIcon } from './UserIcon';
import { Search } from './Search';
import { Logo } from './Logo';
import { useStore } from '@/contexts/store';

export const Header = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return (
    <header className="sticky top-0 z-50 bg-[#00050D]  dark:bg-[#00050D]/95 text-white">
      <div className="max-w-desktop mx-auto h-16 flex justify-between px-10 items-center">
        <Link href="~/">
          <Logo />
        </Link>
        <div className="flex justify-between items-center w-[60%]">
          <div className="flex justify-around items-center w-[35%]">
            <Link
              className="block my-2 py-2 hover:text-zinc-300 text-lg"
              to={isLoggedIn ? '~/cursos/cursos-en-progreso' : '~/todos-los-cursos'}
            >
              Cursos
            </Link>
            <Link className="block my-2 py-2 hover:text-zinc-300 text-lg" to="~/sobre-nosotros">
              Acerca
            </Link>
          </div>
          <div className="flex justify-between items-center w-[50%]">
            <Search />
            <UserIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
