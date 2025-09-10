"use client"
import { Job } from "@/schemas/job"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Job>[] = [
	{
		accessorKey: "created_at",
		header: "Data",
	},
	{
		accessorKey: "origin_id",
		header: "Origem",
	},
	{
		accessorKey: "destiny_id",
		header: "Destino",
	},
	{
		accessorKey: "car_id",
		header: "Placa",
	},
	{
		accessorKey: "car_id",
		header: "Motorista",
	},
	{
		accessorKey: "m3",
		header: "m3",
	},
   {
      accessorKey: "statement_id",
      header: "Manifesto",
   },
	{
		accessorKey: "user_id",
		header: "Usuário",
	},
	{
		accessorKey: "status",
		header: "Status",
	},
]
