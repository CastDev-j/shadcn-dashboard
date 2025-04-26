"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { IoCalendarOutline } from "react-icons/io5";
import { toast } from "sonner";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const formSchema = z
  .object({
    username: z.string().min(2, {
      message: "El nombre de usuario debe tener al menos 2 caracteres.",
    }),
    email: z.string().email("Correo electrónico inválido"),
    password: z.string().min(6, {
      message: "La contraseña debe tener al menos 6 caracteres.",
    }),
    type: z.enum(["all", "mentions", "none"], {
      errorMap: () => ({ message: "Por favor selecciona una opción." }),
    }),
    reservationDate: z.date({
      required_error: "Por favor selecciona una fecha.",
      invalid_type_error: "La fecha es inválida.",
    }),
    marketing_emails: z.boolean(),
  })
  .refine((data) => data.marketing_emails === true, {
    message: "Debes aceptar recibir correos de marketing.",
    path: ["marketing_emails"],
  });

export default function FormHome() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      type: undefined,
      reservationDate: undefined,
      marketing_emails: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Formulario enviado con éxito", {
      description: "Tus datos han sido enviados correctamente.",
      duration: 3000,
      position: "top-right",
    });
    // form.reset(); // Descomenta para resetear el formulario después del envío
  }

  return (
    <div className="flex flex-col items-center gap-8 p-4 md:p-6">
      <section className="w-full max-w-2xl space-y-4">
        <h1 className="text-2xl font-bold text-center md:text-left">
          Formulario de Registro
        </h1>
        <p className="text-gray-600 text-center md:text-left">
          Completa el formulario con tus datos. Asegúrate de que toda la
          información sea correcta antes de enviarlo.
        </p>
      </section>

      <section className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de usuario</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tu_nombre"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormDescription>
                      Este es tu nombre público.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="ejemplo@correo.com"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormDescription>
                      Ingresa tu dirección de correo aquí.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="••••••••"
                      {...field}
                      type="password"
                      className="focus-visible:ring-2 focus-visible:ring-primary"
                    />
                  </FormControl>
                  <FormDescription>Mínimo 6 caracteres.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Notificarme sobre...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="all"
                            className="text-primary"
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Todos los mensajes nuevos
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="mentions"
                            className="text-primary"
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Mensajes directos y menciones
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="none"
                            className="text-primary"
                          />
                        </FormControl>
                        <FormLabel className="font-normal">Nada</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reservationDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Fecha de reservación</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full sm:w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                            "hover:bg-gray-50"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP", { locale: es })
                          ) : (
                            <span>Selecciona una fecha</span>
                          )}
                          <IoCalendarOutline className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        className="rounded-md border"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Selecciona una fecha válida para tu reservación.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                Preferencias de comunicación
              </h3>
              <FormField
                control={form.control}
                name="marketing_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm bg-gray-50">
                    <div className="space-y-0.5">
                      <FormLabel>Correos de marketing</FormLabel>
                      <FormDescription>
                        Recibe correos sobre nuevos productos, funciones y más.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-primary"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormMessage className="px-1 text-sm" />
            </div>

            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                onClick={() => {
                  if (!form.formState.isValid) {
                    toast.error(
                      "Por favor completa todos los campos requeridos.",
                      {
                        duration: 2000,
                        position: "top-right",
                      }
                    );
                  }
                }}
                className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary/90"
              >
                Enviar formulario
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </div>
  );
}
