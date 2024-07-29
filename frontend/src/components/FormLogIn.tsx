import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { ButtonLoading } from './ModalForm';
import { useState } from 'react';
import { useStore } from '@/contexts/store';
import { loginUser } from '@/services/auth';
import { useLocation } from 'wouter';

interface FormLogInProps {
  handleRegister: () => void;
}

const formSchema = z.object({
  email: z.string().email('Email invalido.'),
  password: z.string().min(6, 'La contraseña minima de 6 caracteres.'),
});

export const FormLogIn: React.FC<FormLogInProps> = ({ handleRegister }) => {
  const [isLoading, setIsLoading] = useState(true);
  const setLogin = useStore((state) => state.setLogin);
  const setAccessToken = useStore((state) => state.setAccessToken);
  const firstName = useStore((state) => state.firstName);
  const [location, setLocation] = useLocation();

  const handleLoading = () => {
    setIsLoading(!isLoading);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    handleLoading();
    try {
      const dataUser = await loginUser(data.email, data.password);
      setAccessToken(dataUser.access_token);
      setLogin();
      location && setLocation('/cursos/nuevos-cursos');

      toast({
        title: 'Iniciaste sesion exitosamente!!!',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-green-800 p-4 z-20">
            <p className="text-white">Bienvenido {firstName}</p>
          </pre>
        ),
      });
    } catch (error) {
      toast({
        title: 'Error en su formulario',
        description: (
          <div className="mt-2 max-w-[340px] rounded-md p-4 z-20">
            <h1 className="text-white inline">Por favor vuelve a intentarlo</h1>
          </div>
        ),
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-5 w-full space-y-6 text-white">
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
            ¿Todavía no tienes una cuenta?
            <b className="text-white cursor-pointer" onClick={handleRegister}>
              {' Créala aquí'}
            </b>
          </p>
        </div>
      </form>
    </Form>
  );
};
