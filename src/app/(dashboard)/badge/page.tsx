"use client";

import { Badge, badgeVariants } from "@/components/ui/badge";
import { Link } from "lucide-react";
import { redirect } from "next/navigation";

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
        <Badge variant="default" capitalize>
          default
        </Badge>
        <Badge variant="destructive" capitalize>
          destructive
        </Badge>
        <Badge variant="outline" capitalize>
          outline
        </Badge>
        <Badge variant="secondary" capitalize>
          secondary
        </Badge>
        <Badge variant="success" capitalize>
          success
        </Badge>
        <Badge variant="info" capitalize>
          info
        </Badge>
        <Link
          className={badgeVariants({ variant: "outline" })}
          target="_blank"
          onClick={() => {
            redirect("/badge");
          }}
        >
          Badge
        </Link>
      </section>
    </div>
  );
}
