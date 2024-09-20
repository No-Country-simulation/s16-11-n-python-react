import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FaBars } from 'react-icons/fa';
import { DialogTitle } from './ui/dialog';
interface NavbarProps {
  children: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <FaBars className="mr-20 cursor-pointer" />
        </div>
      </SheetTrigger>
      <SheetContent side={'top'} className="top-16 w-[100%] text-white flex flex-col items-center z-10 bg-[#00050D] dark:bg-[#00050D]">
			<DialogTitle className="sr-only">Menú de navegación</DialogTitle>
        {children}
      </SheetContent>
    </Sheet>
  );
};
