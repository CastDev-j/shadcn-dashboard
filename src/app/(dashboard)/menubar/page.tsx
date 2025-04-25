"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function MenubarPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">
          Página de Menú de Navegación
        </h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo para mostrar el uso de un menú de
          navegación en una aplicación Next.js. Puedes usar este espacio para
          agregar más contenido o ejemplos relacionados con el menú de
          navegación.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Archivo</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Nueva Pestaña <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Nueva Ventana <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>Nueva Ventana de Incógnito</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Compartir</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Enlace por correo</MenubarItem>
                  <MenubarItem>Mensajes</MenubarItem>
                  <MenubarItem>Notas</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem onClick={() => print()}>
                Imprimir... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Editar</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Deshacer <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Rehacer <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Buscar</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Buscar en la web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Buscar...</MenubarItem>
                  <MenubarItem>Buscar Siguiente</MenubarItem>
                  <MenubarItem>Buscar Anterior</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cortar</MenubarItem>
              <MenubarItem>Copiar</MenubarItem>
              <MenubarItem>Pegar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Vista</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>
                Mostrar Siempre la Barra de Marcadores
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                Mostrar Siempre URLs Completas
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Recargar <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Forzar Recarga <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Alternar Pantalla Completa</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Ocultar Barra Lateral</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Perfiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Editar...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Agregar Perfil...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">Ejemplo 1</h2>
          <p className="text-gray-600">
            Este es un ejemplo de contenido de relleno para mostrar cómo se
            puede estructurar una sección.
          </p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">Ejemplo 2</h2>
          <p className="text-gray-600">
            Otro ejemplo de contenido de relleno que puedes personalizar según
            tus necesidades.
          </p>
        </div>
      </section>
    </div>
  );
}
