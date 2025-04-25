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
              position: "top-right",
              action: {
                label: "cancelar",
                onClick: () => console.log("cancelar"),
              },
            })
          }
        >
          Crear Evento
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success("Evento completado", {
              description: "Domingo, 03 de Diciembre del 2025 a las 9:00 AM",
              position: "top-right",
            })
          }
        >
          Completar Evento
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            toast.error("Evento cancelado", {
              description: "Domingo, 03 de Diciembre del 2025 a las 9:00 AM",
              position: "top-right",
            })
          }
        >
          Cancelar Evento
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("Evento info", {
              description: "Domingo, 03 de Diciembre del 2025 a las 9:00 AM",
              position: "top-right",
            })
          }
        >
          Info Evento
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Evento peligro", {
              description: "Domingo, 03 de Diciembre del 2025 a las 9:00 AM",
              position: "top-right",
            })
          }
        >
          Peligro Evento
        </Button>
      </section>
    </div>
  );
}
