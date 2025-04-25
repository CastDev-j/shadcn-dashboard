"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function SonnerPagina() {
  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de Sonner</h1>
        <p className="text-gray-600 mb-6">
            Esta es una página de ejemplo que muestra cómo se vería el contenido
            de la página. Aquí puedes agregar cualquier información relevante o
            instrucciones para el usuario.
        </p>
      </section>

      <section className="w-full flex flex-col items-center gap-4">
        <Button
          variant="outline"
          onClick={() =>
            toast("Evento creado", {
              description: "Domingo, 03 de Diciembre del 2025 a las 9:00 AM",
              
              action: {
                label: "deshacer",
                onClick: () => console.log("deshacer"),
              },
            })
          }
        >
          Crear Evento
        </Button>
      </section>
    </div>
  );
}
