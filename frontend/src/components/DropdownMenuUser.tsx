import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { FaRegFolder, FaRegMoon, FaRegSun, FaUser } from "react-icons/fa";
import { RxExit } from 'react-icons/rx';

export const DropdownMenuUser: React.FC = () => {
    const [themeDark, setThemeDark] = useState(true);

    const handleChangeTheme = () => {
        setThemeDark(!themeDark);
    }
  return (
    <DropdownMenu >
        <DropdownMenuTrigger asChild>
            <div>
                <FaUser className=" p-1 w-7 h-7 cursor-pointer text-[#006E2F] hover:text-[#2a8f56]"/>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[358px] h-[467px] px-10 mr-10 py-5 ">     
            <DropdownMenuLabel className="flex justify-start">
                <div className="w-12 h-12 rounded-full bg-slate-400 mr-4 py-2">Avatar</div>
                <div>
                    <div>{'Matias Perez'}</div>
                    <div>{'matias@prueba.com'}</div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuLabel className="flex items-center justify-between py-2">
                <div className="flex items-center">
                    {
                        themeDark?
                        <FaRegMoon className=" p-1 w-7 h-7 "/>:
                        <FaRegSun className=" p-1 w-7 h-7 "/>
                    }
                    <p className="pl-2 font-bold">Tema {themeDark?'Oscuro':'Claro'}</p> 
                </div>
                <Switch onClick={handleChangeTheme}/>
            </DropdownMenuLabel>
            <DropdownMenuItem className="flex py-2">
                <FaRegFolder className=" p-1 w-7 h-7 "/>
                <p className="pl-2 font-bold">Mis Suscripciones</p> 
            </DropdownMenuItem>
            <DropdownMenuSeparator className="py-2"/>
            <DropdownMenuItem className="flex py-2">
                <FaUser className=" p-1 w-7 h-7"/>
                <p className="pl-2 font-bold">Mi Cuenta</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex py-2">
                <RxExit className=" p-1 w-7 h-7"/>
                <p className="pl-2 font-bold">Salir</p>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>  
    )
}

