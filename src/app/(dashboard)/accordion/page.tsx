import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const itemsValue = [
  {
    id: "item-1",
    title: "Ejemplo de acordeon 1",
    content:
      "Este es el contenido del acordeon 1. Puedes agregar más información aquí.",
  },
  {
    id: "item-2",
    title: "Ejemplo de acordeon 2",
    content:
      "Este es el contenido del acordeon 2. Puedes agregar más información aquí.",
  },
  {
    id: "item-3",
    title: "Ejemplo de acordeon 3",
    content:
      "Este es el contenido del acordeon 3. Puedes agregar más información aquí.",
  },
];

export default function Home() {
  return ( 
    <div className="flex flex-col items-center">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de Acordeon</h1>
        <p className="text-gray-600 mb-6">
          Haz clic en el botón de abajo para interactuar.
        </p>

        <Accordion type="single">
          {itemsValue.map(({ id, content, title }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger>{title}</AccordionTrigger>
              <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
