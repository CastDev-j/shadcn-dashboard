"use client";

import { Badge, badgeVariants } from "@/components/ui/badge";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de badge</h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo que muestra cómo usar el componente de
          badge en una aplicación Next.js. Puedes personalizar el contenido y el
          estilo según tus necesidades.
        </p>
      </section>

      <section className="w-full flex flex-wrap gap-4 justify-center items-center">
        <Badge variant="default">default</Badge>
        <Badge variant="destructive">destructive</Badge>
        <Badge variant="outline">outline</Badge>
        <Badge variant="secondary">secondary</Badge>
        <Badge variant="success">success</Badge>
        <Badge variant="info">info</Badge>
        <Link href={'/badge'} className={badgeVariants({ variant: "outline" })}>Badge</Link>

      </section>
    </div>
  );
}
