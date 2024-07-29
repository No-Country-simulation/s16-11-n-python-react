import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'wouter';

export default function CoursesLayout() {
  const navStyle = navigationMenuTriggerStyle();

  return (
    <div className="fixed flex items-center w-full mt-3 z-10">
      <NavigationMenu className="mx-auto shadow-sm dark:shadow-black shadow-zinc-300 dark:bg-[#09090B] bg-white rounded-lg p-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/cursos-finalizados" className={navStyle}>
              Cursos finalizados
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/cursos-en-progreso" className={navStyle}>
              Cursos en progreso
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/nuevos-cursos" className={navStyle}>
              Nuevos Cursos
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
