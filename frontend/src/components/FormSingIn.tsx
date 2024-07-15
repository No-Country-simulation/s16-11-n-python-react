import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
    username: z.string().min(3, "Campo Obligatorio,"),
    name: z.string().min(3, 'Campo Obligatorio'),
    email: z.string().email('Email invalido.'),
    password: z.string().min(6, 'La contraseña minima de 6 caracteres.'),
  })

export const FormSingIn = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
        },
      })
     
      // 2. Define a submit handler.
     
    function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 z-20">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }

  return (
 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre:</FormLabel>
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
              <FormLabel>Usuario:</FormLabel>
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
                <FormLabel>Email:</FormLabel>
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
                <FormLabel>Contraseña:</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Contraseña" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full text-right">
            <p>Olvide mi contraseña.</p> 
          </div>
        <Button 
            variant="login"
            type="submit">Entrar
        </Button>
      </form>
    </Form>  )
}

