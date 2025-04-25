"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProgressPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleProgressChange = (newProgress: number) => {
    setProgress(newProgress);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">
          Página de Progreso (Progress Page)
        </h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo para mostrar el uso de un componente de
          progreso en una aplicación Next.js. Puedes usar este espacio para
          agregar más contenido o ejemplos relacionados con el progreso.
        </p>
      </section>

      <section className="w-full flex flex-col items-center gap-4">
        <Progress
          value={progress}
          indicatorColor={cn({
            "bg-red-500": progress < 50,
            "bg-yellow-500": progress >= 50 && progress < 80,
            "bg-green-500": progress >= 80,
            "bg-primary": progress === 100,
          })}
        />
      </section>
      <section className="w-full flex justify-between items-center gap-4">
        <Button
          variant="outline"
          disabled={progress === 100}
          onClick={() => handleProgressChange(Math.min(progress + 20, 100))}
        >
          add 20%
        </Button>

        <Button
          variant="outline"
          disabled={progress === 0}
          onClick={() => handleProgressChange(Math.max(progress - 20, 0))}
        >
          reduce 20%
        </Button>
      </section>
    </div>
  );
}
