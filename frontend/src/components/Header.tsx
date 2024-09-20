import { Link } from 'wouter';
import { UserIcon } from './UserIcon';
import { Search } from './Search';
import { Logo } from './Logo';
import { useStore } from '@/contexts/store';
import { Navbar } from './Navbar';

export const Header = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const navbar = (
    <>
      <Link
        className="hover:text-zinc-300 text-lg"
        to={isLoggedIn ? '~/cursos/cursos-en-progreso' : '~/todos-los-cursos'}
      >
        Cursos
      </Link>
      <Link className="hover:text-zinc-300 text-lg" to="~/sobre-nosotros">
        Acerca
      </Link>
      <Search />
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#00050D] dark:bg-[#00050D]/95 text-white">
      <div className="max-w-desktop mx-auto h-16">
        <div className="w-full h-full px-10 mx-auto flex justify-between">
          <Link href="~/" className="flex justify-start items-center mr-5 sm:w-[30%]">
            <Logo />
          </Link>
          <div className="flex justify-between items-center">
            <div className="md:hidden flex justify-end gap-8 items-center">
              <Navbar>{navbar}</Navbar>
            </div>
            <div className="hidden md:flex justify-end gap-8 items-center">{navbar}</div>
          </div>
          <UserIcon />
        </div>
      </div>
    </header>
  );
};
