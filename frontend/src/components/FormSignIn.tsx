import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useState } from 'react';
import { ButtonLoading } from './ModalForm';
import { useStore } from '@/contexts/store';
import { loginUser, registerUser } from '@/services/auth';
import { useLocation } from 'wouter';
import { FaCheck } from 'react-icons/fa';

interface FormSignInProps {
  handleRegister: () => void;
}
const formSchema = z.object({
  firstName: z.string().min(3, 'Campo Obligatorio.'),
  lastName: z.string().min(3, 'Campo Obligatorio.'),
  email: z.string().email('Email invalido.'),
  password: z.string().min(6, 'La contraseña minima de 6 caracteres.'),
});
export const FormSignIn: React.FC<FormSignInProps> = ({ handleRegister }) => {
  const [isLoading, setIsLoading] = useState(true);
  const setLogin = useStore((state) => state.setLogin);
  const setFirstName = useStore((state) => state.setFirstName);
  const setEmail = useStore((state) => state.setEmail);
  const setLastName = useStore((state) => state.setLastName);
  const setAccessToken = useStore((state) => state.setAccessToken);
  const [location, setLocation] = useLocation();

  const handleLoading = () => {
    setIsLoading(!isLoading);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, password } = data;
    handleLoading();
    try {
      const dataUser = await registerUser({ first_name: firstName, last_name: lastName, email, password });
      const dataAccess = await loginUser(email, password);
      setFirstName(dataUser.first_name);
      setEmail(dataUser.email);
      setLastName(dataUser.last_name);

      toast('Registro exitoso!', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md p-4 z-20">
            <code className="text-white">Bienvenido {dataUser.first_name} <FaCheck className='bg-green-600 rounded-full'/></code>
          </pre>
        ),
      });
      setAccessToken(dataAccess.access_token);
      setLogin();
      location && setLocation('~/cursos/nuevos-cursos');
    } catch (error) {
      setIsLoading(false);
      toast('Error en su formulario', {
        description: (
          <div className="mt-2 max-w-[340px] rounded-md p-4 z-20">
            <h1 className="text-white inline">Por favor vuelve a intentarlo</h1>
          </div>
        ),
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-5 w-full space-y-4 text-white">
        <FormField
          control={form.control}
          name="firstName"
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
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-500">Apellido:</FormLabel>
              <FormControl>
                <Input placeholder="Apellido" {...field} />
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
              {' Click aquí'}
            </b>
          </p>
        </div>
      </form>
    </Form>
  );
};
