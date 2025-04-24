"use client";

import { ImCheckboxChecked } from "react-icons/im";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CarouselPage() {
  const [terms, setTerms] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de Checkbox</h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo que muestra cómo usar el componente de
          checkbox en una aplicación Next.js. Puedes personalizar el contenido y
          el estilo según tus necesidades.
        </p>
      </section>

      {terms && (
        <Alert className="text-emerald-600 my-12">
          <ImCheckboxChecked className="h-4 w-4" />
          <AlertTitle>¡Términos aceptados!</AlertTitle>
          <AlertDescription>
            Has aceptado los términos y condiciones. Puedes proceder con el
            siguiente paso.
          </AlertDescription>
        </Alert>
      )}

      <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
        <div className="items-top flex space-x-2">
          <Checkbox
            id="terms1"
            checked={terms}
            onCheckedChange={(value: boolean) => setTerms(value)}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Acepto los términos y condiciones
            </label>
            <p className="text-sm text-muted-foreground">
              Al hacer clic en &quot;Aceptar&quot;, confirmas que has leído y
              aceptado los términos y condiciones.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
