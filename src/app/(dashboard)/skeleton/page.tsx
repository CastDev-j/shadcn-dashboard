"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPagina() {
  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de Skeleton</h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo que muestra cómo se vería el contenido
          de la página. Aquí puedes agregar cualquier información relevante o
          instrucciones para el usuario.
        </p>
      </section>

      <section className="w-full flex flex-col items-center gap-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
