import { payments } from "@/data/payments.data";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function fetchData() {
  return payments();
}
export default async function TabsPagina() {
  const data = await fetchData();

  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de Tabla</h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo que muestra cómo se vería el contenido
          de la página. Aquí puedes agregar cualquier información relevante o
          instrucciones para el usuario.
        </p>
      </section>

      <section className="w-full flex flex-col items-center gap-4">
        <DataTable columns={columns} data={data} />
      </section>
    </div>
  );
}
