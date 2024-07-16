import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { ButtonLoading } from "./ModalForm";
import { useState } from "react";

interface FormLogInProps {
  handleRegister: () => void;
}

const formSchema = z.object({
  email: z.string().email("Email invalido."),
  password: z.string().min(6, "La contraseña minima de 6 caracteres."),
});

export const FormLogIn: React.FC<FormLogInProps> = ({ handleRegister }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(!isLoading);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    handleLoading();
    toast({
      title: "Su formulario fue enviado:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md p-4 z-20">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-5 w-full space-y-6"
      >
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
                <Input
                  type="password"
                  placeholder="Contraseña"
                  className="text-zinc-500"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Debe contener mas de 6 caracteres.
              </FormDescription>
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
            ¿Todavía no tienes una cuenta?
            <b className="text-white cursor-pointer" onClick={handleRegister}>
              {" Créala aquí"}
            </b>
          </p>
        </div>
      </form>
    </Form>
  );
};
