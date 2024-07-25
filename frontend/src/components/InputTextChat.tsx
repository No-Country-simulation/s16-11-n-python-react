import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { FaPaperPlane } from 'react-icons/fa';

const FormSchema = z.object({
  messageSend: z
    .string()
    .min(1, {
      message: 'Escriba al menos un caracter.',
    })
    .max(250, {
      message: 'No puede contener mas de 250 caracteres',
    }),
});

export const InputTextChat: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      messageSend: '',
    },
  });
  const { setValue } = form;

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Mensaje enviado:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setValue('messageSend', '', { shouldValidate: false, shouldDirty: false });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[90%] h-[55px] flex justify-between mx-auto">
        <FormField
          control={form.control}
          name="messageSend"
          render={({ field }) => (
            <FormItem className="h-full py-1">
              <FormControl className="h-[70%] w-[220px]">
                <Input placeholder="Enviar mensaje..." {...field} />
              </FormControl>
              <FormMessage className="text-[10px]" />
            </FormItem>
          )}
        />
        <Button className="rounded-full h-12 w-12" type="submit">
          <FaPaperPlane className="text-blue-600" />
        </Button>
      </form>
    </Form>
  );
};