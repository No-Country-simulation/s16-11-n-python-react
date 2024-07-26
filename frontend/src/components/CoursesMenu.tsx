import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'wouter';

export const CoursesMenu = () => {
  return (
    <div className="fixed flex items-center top-16 dark:shadow-xl dark:shadow-[#09090B] dark:bg-[#09090B]/95 bg-white shadow-none z-20 w-[99%] h-[60px]">
      <NavigationMenu className="mx-auto shadow-sm dark:shadow-black shadow-zinc-300 dark:bg-[#09090B] bg-white my-[60px]">
        <NavigationMenuList className="mx-auto">
          <NavigationMenuItem>
            <Link to="/finished-courses" className={navigationMenuTriggerStyle()}>
              Cursos finalizados
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/courses-in-progress" className={navigationMenuTriggerStyle()}>
              Cursos en progreso
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/new-courses" className={navigationMenuTriggerStyle()}>
              Nuevos Cursos
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
