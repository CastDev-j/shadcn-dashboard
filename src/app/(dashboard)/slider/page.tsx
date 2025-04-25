"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function SliderPagina() {
  const [value, setValue] = useState([0, 100]);

  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de Slider</h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo que muestra cómo se vería el contenido
          de la página. Aquí puedes agregar cualquier información relevante o
          instrucciones para el usuario.
        </p>
      </section>

      <section className="w-full flex flex-col items-center gap-4">
        <Slider
          defaultValue={value}
          onValueChange={(value) => setValue(value)}
          max={100}
          orientation="vertical"
          step={10}
        />
      </section>

      <section className="w-full flex flex-col items-center gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-gray-900 font-bold">Valor Uno:</span>
          <span className="text-gray-600">{value[0]}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-900 font-bold">Valor Dos:</span>
          <span className="text-gray-600">{value[1]}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-900 font-bold">Suma:</span>
          <span className="text-gray-600">{value[0] + value[1]}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-900 font-bold">Diferencia:</span>
          <span className="text-gray-600">{Math.abs(value[0] - value[1])}</span>
        </div>
      </section>
    </div>
  );
}
