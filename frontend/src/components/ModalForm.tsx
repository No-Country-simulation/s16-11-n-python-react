import { FormSignIn } from './FormSignIn';
import React, { useState } from 'react';
import { FormLogIn } from './FormLogIn';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './Logo';

export function ButtonLoading() {
  return (
    <Button variant="loading">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}

export const ModalForm: React.FC = () => {
  const [toggleForm, setToggleForm] = useState(true);

  const handleRegister = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex justify-between">
          <button
            onClick={() => {
              setToggleForm(true);
            }}
            className="p-1 h-7 cursor-pointer hover:text-zinc-300 mr-2"
          >
            Inicia sesion
          </button>
          <button
            onClick={() => {
              setToggleForm(false);
            }}
            className="rounded-md bg-[#1A98FF] hover:bg-[#1371be] p-1.5 cursor-pointer"
          >
            Comienza gratis!
          </button>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#101214] ">
        <SheetHeader>
          <SheetTitle className="scroll-m-20 flex justify-center tracking-tight lg:text-3xl py-5">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-1">
          <div className=" h-full w-full flex justify-center flex-col items-center">
            {toggleForm ? (
              <FormLogIn handleRegister={handleRegister} />
            ) : (
              <FormSignIn handleRegister={handleRegister} />
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
