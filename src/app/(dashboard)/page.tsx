import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Bienvenido</h1>
        <p className="text-gray-600 mb-6">
          Haz clic en el botón de abajo para interactuar.
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Hazme click
        </Button>
      </section>
    </div>
  );
}
