"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de dialogo de alerta</h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo que muestra cómo usar el componente de
          diálogo de alerta. Puedes personalizar el contenido y el estilo según
          tus necesidades.
        </p>
      </section>

      <Button onClick={() => setIsDialogOpen(true)} variant="ghost">
        Mostrar Diálogo Desde Botón externo
      </Button>

      <section className="w-full flex flex-col gap-4 justify-center items-center">
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="w-fit">
              Mostrar Diálogo
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. Esto eliminará permanentemente
                tu cuenta y eliminará tus datos de nuestros servidores.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => console.log("cancelar")}>
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => console.log("continuar")}>
                Continuar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </div>
  );
}
