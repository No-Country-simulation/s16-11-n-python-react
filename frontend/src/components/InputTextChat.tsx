import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FaPaperPlane } from 'react-icons/fa';
import { TchatMessage } from './ChatBot';
import Loader from './Loader';

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

interface InputTextChatProps {
  updateChatMessages: (message: TchatMessage) => void;
  handleSubmit: (question: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

export const InputTextChat: React.FC<InputTextChatProps> = ({ updateChatMessages, handleSubmit, isLoadingAnswer }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      messageSend: '',
    },
  });
  const { setValue } = form;

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    updateChatMessages({
      id: crypto.randomUUID(),
      type: 'sent',
      text: data.messageSend,
    });
    setValue('messageSend', '', { shouldValidate: false, shouldDirty: false });
    handleSubmit(data.messageSend);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[90%] h-[55px] flex justify-between mx-auto gap-8 items-center"
      >
        <FormField
          control={form.control}
          name="messageSend"
          disabled={isLoadingAnswer}
          render={({ field }) => (
            <FormItem className="h-full py-0.5 w-full">
              <FormControl className="h-full">
                <Input placeholder="Enviar mensaje..." {...field} />
              </FormControl>
              <FormMessage className="text-[10px]" />
            </FormItem>
          )}
        />
        <Button className="rounded-full h-12 w-12" variant={'send'} type="submit">
          {isLoadingAnswer ? <Loader /> : <FaPaperPlane className="text-white" />}
        </Button>
      </form>
    </Form>
  );
};
