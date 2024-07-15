import { FormSingIn } from "./FormSingIn";
import React, { useState } from "react";
import { FormLogIn } from "./FormLogIn";
import { ReloadIcon } from "@radix-ui/react-icons";
import { FaUser } from "react-icons/fa"
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

export function ButtonLoading() {
  return (
    <Button variant="loading">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}


export const ModalForm: React.FC = () => {
    // const [isOpen, setisOpen] = useState(true);
    const [isUser, setisUser] = useState(true);

    const handleRegister = () =>{
        setisUser(!isUser);
    }
  
  return (
    <>
        <Sheet >
            <SheetTrigger asChild>
                <FaUser className=" p-1 w-7 h-7 cursor-pointer hover:text-[#535456]"/>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#101214] w-full">
                <SheetHeader>
                <SheetTitle className="scroll-m-20 text-xl font-bold text-center tracking-tight lg:text-3xl py-5">
                            TechIAdemic
                </SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-1">
                    <div className=" h-full w-full flex justify-center flex-col items-center">      
                        {isUser?<FormLogIn handleRegister={handleRegister}/>:<FormSingIn handleRegister={handleRegister}/>}
                    </div>
                </div>
            </SheetContent>
        </Sheet>   
    </>
  )
}