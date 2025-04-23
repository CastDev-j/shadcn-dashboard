import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface AlertItem {
  variant: "default" | "destructive" | "success" | "warning";
  title: string;
  description: string;
}

const alerts: AlertItem[] = [
  {
    variant: "default",
    title: "Alerta por defecto!",
    description:
      "Esta es una alerta por defecto. Puedes personalizarla según tus necesidades.",
  },
  {
    variant: "destructive",
    title: "Alerta destructiva",
    description:
      "Esta es una alerta destructiva. Puedes personalizarla según tus necesidades.",
  },
  {
    variant: "success",
    title: "Alerta éxito!",
    description:
      "Esta es una alerta de éxito. Puedes personalizarla según tus necesidades.",
  },
  {
    variant: "warning",
    title: "Alerta de advertencia",
    description:
      "Esta es una alerta de advertencia. Ten cuidado con esta acción.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de Alerta</h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo que muestra cómo usar el componente de
          alerta.
        </p>
      </section>

      <section className="w-full flex flex-col gap-4">
        {alerts.map(({ description, title, variant }, key) => (
          <Alert key={key} variant={variant}>
            <Terminal className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description} </AlertDescription>
          </Alert>
        ))}
      </section>
    </div>
  );
}
