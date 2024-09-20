import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FaSearch } from 'react-icons/fa';

const FormSchema = z.object({
  searchCourse: z.string(),
});

export function Search() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchCourse: '',
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center rounded-full h-12 w-12 cursor-pointer bg-zinc-500">
          <FaSearch className="text-white" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full md:w-96 h-16 relative top-5 md:right-20">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full h-[95%] flex justify-between items-center mx-auto"
          >
            <FormField
              control={form.control}
              name="searchCourse"
              render={({ field }) => (
                <FormItem className="h-full w-full">
                  <FormControl className="h-full w-80">
                    <Input placeholder="Que quieres aprender..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <button className="flex justify-center items-center rounded-full h-12 w-12" type="submit">
              <FaSearch className="bg-none" />
            </button>
          </form>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
