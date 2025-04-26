"use client";

import { Payment, PaymentStatus } from "@/data/payments.data";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import { HiDotsHorizontal } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { LuArrowUpDown } from "react-icons/lu";

const statusEs = {
  pending: "Pendiente",
  processing: "Procesando",
  success: "Exitoso",
  failed: "Fallido",
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as PaymentStatus;

      return (
        <div className="flex items-center justify-start">
          <span
            className={cn("flex size-3 rounded-full mr-2", {
              "bg-emerald-400": status === "success",
              "bg-yellow-400": status === "pending",
              "bg-blue-400 animate-pulse": status === "processing",
              "bg-red-400": status === "failed",
            })}
          ></span>
          <span>{statusEs[status]}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "clientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center justify-start w-full"
        >
          <LuArrowUpDown className="mr-2 h-4 w-4" />
          Cliente
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center justify-start w-full"
        >
          <LuArrowUpDown className="mr-2 h-4 w-4" />
          Correo Electrónico
        </Button>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center justify-start w-full"
        >
          <LuArrowUpDown className="mr-2 h-4 w-4" />
          Monto
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-EU", {
        style: "currency",
        currency: "MXN",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <HiDotsHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id);
                toast.success("ID de pago copiado al portapapeles", {
                  description: payment.id,
                  position: "top-right",
                });
              }}
            >
              Copiar ID de pago
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver cliente</DropdownMenuItem>
            <DropdownMenuItem>Ver detalles de pago</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
