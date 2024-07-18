import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { FaRegFolder, FaRegMoon, FaRegSun, FaUser } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { useTheme } from "./ThemeProvider";
import { useStore } from "@/contexts/store";

export const DropdownMenuUser: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const setLogout = useStore((state) => state.setLogout);
  const name = useStore((state) => state.name);
  const email = useStore((state) => state.email);
  const handleChangeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <FaUser className="p-1 w-7 h-7 cursor-pointer text-blue-400 hover:text-blue-500" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[358px] h-[367px] px-10 mr-10 py-5">
        <DropdownMenuLabel className="flex justify-start items-center">
          <div className="w-12 h-12 rounded-full bg-slate-400 mr-4 py-2 flex justify-center items-center">
            Avatar
          </div>
          <div className="flex flex-col">
            <div className="text-[15px]">{name}</div>
            <div className="text-[12px]">{email}</div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="flex items-center justify-between my-2">
          <div className="flex items-center">
            {theme === "dark" ? (
              <FaRegMoon className="p-1 w-7 h-7" />
            ) : (
              <FaRegSun className="p-1 w-7 h-7" />
            )}
            <p className="pl-2 font-bold">
              Tema {theme === "dark" ? "Oscuro" : "Claro"}
            </p>
          </div>
          <Switch onClick={handleChangeTheme} />
        </DropdownMenuLabel>
        <DropdownMenuItem className="flex my-3 cursor-pointer">
          <FaRegFolder className="p-1 w-7 h-7" />
          <p className="pl-2 font-bold">Mis Suscripciones</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex my-3 cursor-pointer">
          <FaUser className="p-1 w-7 h-7" />
          <p className="pl-2 font-bold">Mi Cuenta</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex my-3 cursor-pointer">
          <RxExit className="p-1 w-7 h-7" />
          <p className="pl-2 font-bold" onClick={() => setLogout()}>
            Salir
          </p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
