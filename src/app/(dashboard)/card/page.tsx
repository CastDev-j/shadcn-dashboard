"use client";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const example = Array.from({ length: 10 }, (_, i) => i + 1);

export default function CalendarPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de Avatar</h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo que muestra cómo usar el componente de
          avatar en una aplicación Next.js. Puedes personalizar el contenido y
          el estilo según tus necesidades.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
        {example.map((item, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardHeader>
              <CardTitle>Carta Número {item}</CardTitle>
              <CardDescription>Descripción de relleno</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 grid-cols-2">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <p key={num} className="text-sm text-gray-500">
                  {item} x {num} = {item * num}
                </p>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant={"ghost"}>info</Button>
              <Button variant={"default"}>Continuar</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
