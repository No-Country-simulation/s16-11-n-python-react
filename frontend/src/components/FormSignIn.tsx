import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { ButtonLoading } from "./ModalForm";
import { useStore } from "@/contexts/store";

interface FormSignInProps {
  handleRegister: () => void;
}
const formSchema = z.object({
  username: z.string().min(3, "Campo Obligatorio."),
  name: z.string().min(3, "Campo Obligatorio."),
  email: z.string().email("Email invalido."),
  password: z.string().min(6, "La contraseña minima de 6 caracteres."),
});
export const FormSignIn: React.FC<FormSignInProps> = ({ handleRegister }) => {
  const [isLoading, setIsLoading] = useState(true);
  const setLogin = useStore((state) => state.setLogin);
  const setName = useStore((state) => state.setName);
  const setEmail = useStore((state) => state.setEmail);
  const setUser = useStore((state) => state.setUser);

  const handleLoading = () => {
    setIsLoading(!isLoading);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    handleLoading();
    //Si el registro es exitoso se guarda los datos de user y se ejecuta el toast:
    setName(data.name);
    setEmail(data.email);
    setUser(data.username);
    setLogin();
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 z-20">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-5 w-full space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-500">Nombre:</FormLabel>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-500">Usuario:</FormLabel>
              <FormControl>
                <Input placeholder="Usuario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-500">Email:</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-500">Contraseña:</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Contraseña" className="text-zinc-500" {...field} />
              </FormControl>
              <FormDescription>Debe contener mas de 6 caracteres.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full text-right">
          <p className="text-zinc-500">Olvide mi contraseña.</p>
        </div>
        {isLoading ? (
          <Button variant="login" type="submit">
            Entrar
          </Button>
        ) : (
          <ButtonLoading />
        )}
        <div className="text-center">
          <p className="text-[#535456] text-pretty">
            ¿Ya estas registrado?
            <b className="text-white cursor-pointer" onClick={handleRegister}>
              {" Click aquí"}
            </b>
          </p>
        </div>
      </form>
    </Form>
  );
};
