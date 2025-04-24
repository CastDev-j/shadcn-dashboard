"use client";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useEffect, useState } from "react";

export default function CommandPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de Command</h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo que muestra cómo usar el componente de
          command en una aplicación Next.js.
        </p>

        <p className="text-sm text-muted-foreground">
          Presiona{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <CommandInput placeholder="Escriba un comando o busque..." />
          <CommandList>
            <CommandEmpty>No se Encontraron Resultados.</CommandEmpty>
            <CommandGroup heading="Sugestiones">
              <CommandItem onSelect={()=>console.log('calendar')}>
                <Calendar />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem onSelect={()=>console.log('search emoji')}>
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Configuración">
              <CommandItem onSelect={()=>console.log('profile')}>
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘Pene</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={()=>console.log('billing')}>
                <CreditCard />
                <span>Billing</span>
                <CommandShortcut>⌘Pene</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={()=>console.log('settings')}>
                <Settings />
                <span>Settings</span>
                <CommandShortcut>⌘Pene</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Escriba un comando o busque..." />
        <CommandList>
          <CommandEmpty>No se Encontraron Resultados.</CommandEmpty>
          <CommandGroup heading="Sugestiones">
            <CommandItem onSelect={()=>console.log('calendar')}>
              <Calendar />
              <span>Calendario</span>
            </CommandItem>
            <CommandItem onSelect={()=>console.log('search emoji')}>
              <Smile />
              <span>Buscar Emoji</span>
            </CommandItem>
            <CommandItem onSelect={()=>console.log('calculator')} disabled>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Configuración">
            <CommandItem onSelect={()=>console.log('perfil')}>
              <User />
              <span>Perfil</span>
              <CommandShortcut>⌘Pene</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={()=>console.log('facturacion')}>
              <CreditCard />
              <span>Facturación</span>
              <CommandShortcut>⌘Pene</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={()=>console.log('ajustes')}>
              <Settings />
              <span>Ajustes</span>
              <CommandShortcut>⌘Pene</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Extras">
            <CommandItem onSelect={()=>console.log('amigos')}>
              <User />
              <span>Amigos</span>
            </CommandItem>
            <CommandItem onSelect={()=>console.log('cuentas')}>
              <CreditCard />
              <span>Cuentas</span>
            </CommandItem>
            <CommandItem onSelect={()=>console.log('configuracion')}>
              <Settings />
              <span>Configuración</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
