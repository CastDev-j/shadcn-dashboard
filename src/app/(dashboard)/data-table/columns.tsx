"use client";

import { Payment, PaymentStatus } from "@/data/payments.data";
import { cn } from "@/lib/utils";
import { ColumnDef, FilterFn, Row } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

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

const myCustomFilterFn: FilterFn<Payment> = (
  row: Row<Payment>,
  columnId: string,
  filterValue: string,
) => {
  const filterValues = filterValue.toLowerCase().split(" ");

  const isRowValid = filterValues.every(
    (filterValue) =>
      row.original.clientName.toLowerCase().includes(filterValue) ||
      row.original.email.toLowerCase().includes(filterValue)
  );

  return isRowValid;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as PaymentStatus;

      return (
        <div className="flex items-center justify-start">
          <div
            className={cn("flex size-3 rounded-full mr-2", {
              "bg-emerald-400": status === "success",
              "bg-yellow-400": status === "pending",
              "bg-blue-400 animate-pulse": status === "processing",
              "bg-red-400": status === "failed",
            })}
          />
          <div>{statusEs[status]}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "clientName",
    filterFn: myCustomFilterFn,
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
    filterFn: myCustomFilterFn,
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
              <span className="sr-only">abrir menú</span>
              <HiDotsHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
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
