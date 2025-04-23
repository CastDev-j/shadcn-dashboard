"use client";

import { useState } from "react";
import Link from "next/link";
import { IoHome, IoAlertCircle, IoReorderThree } from "react-icons/io5"; // Importar íconos necesarios

const links = [
  { name: "Inicio", href: "/", icon: IoHome },
  { name: "Acordeon", href: "/accordion", icon: IoReorderThree },
  { name: "Alerta", href: "/alert", icon: IoAlertCircle },
];

export default function SidebarAndContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="bg-white text-gray-900 border-b border-gray-300 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <a
                href="#"
                className="text-xl font-bold flex items-center lg:ml-2.5"
              >
                {/* Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="h-6 w-6 text-gray-900"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    stroke="currentColor"
                    strokeWidth="16"
                  />
                  <line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    stroke="currentColor"
                    strokeWidth="16"
                  />
                </svg>
                <span className="ml-2 text-gray-900">Shadcn/ui</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 lg:order-2">
              <div className="bg-blue-600 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
                FH
              </div>
              <button
                id="toggleSidebarMobile"
                aria-expanded={isSidebarOpen}
                aria-controls="sidebar"
                onClick={toggleSidebar}
                className="lg:hidden mr-2 text-gray-700 hover:text-black cursor-pointer p-2 hover:bg-gray-200 focus:bg-gray-200 focus:ring-2 focus:ring-gray-300 rounded"
              >
                {/* Icono de hamburguesa */}
                <IoReorderThree className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex overflow-hidden bg-gray-50 pt-16">
        {/* Sidebar */}
        <aside
          id="sidebar"
          className={`fixed z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-transform duration-300 bg-white text-gray-900 border-r border-gray-300 ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
          aria-label="Sidebar"
        >
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 divide-y divide-gray-200 space-y-1">
              <ul className="space-y-2 pb-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeSidebar}
                      className="text-base capitalize text-gray-700 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {/* Mostrar ícono y texto */}
                      <link.icon className="w-5 h-5 text-gray-500" />
                      <span className="ml-3">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        {/* Backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-10 bg-black opacity-50 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
        {/* Main Content */}
        <div
          id="main-content"
          className={`h-full w-full bg-white relative overflow-y-auto ${
            isSidebarOpen ? "lg:ml-64" : "lg:ml-64"
          }`}
        >
          <main className="flex flex-col min-h-screen">
            <div className="pt-6 px-4 flex-grow">
              <div className="w-full min-h-[calc(100vh-230px)]">
                <div className="bg-white text-gray-900 shadow rounded-lg p-4 sm:p-6 xl:p-8">
                  {children}
                </div>
              </div>
            </div>
          </main>
          <footer className="bg-white text-gray-700 shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
            <ul className="flex items-center flex-wrap mb-6 md:mb-0">
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline mr-4 hover:text-black"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline mr-4 hover:text-black"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline mr-4 hover:text-black"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline hover:text-black"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex space-x-6">{/* Iconos redes sociales */}</div>
          </footer>
        </div>
      </div>
    </>
  );
}
