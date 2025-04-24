"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

      <section className="w-full flex flex-wrap gap-4 justify-center items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://avatars.githubusercontent.com/u/103233568?v=4" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
      </section>
    </div>
  );
}
