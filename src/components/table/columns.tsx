"use client"
import { Job } from "@/schemas/job"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./data-table-column-header"

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
		enableHiding: false,
		header: ({ column }) => <DataTableColumnHeader column={column} title="Placa" />,
		filterFn: (row, columnId, filterValue) => {
			const cellValue = row.getValue<string>(columnId)
			return filterValue.includes(cellValue)
		},
		meta: { canHide: false },
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">{row.getValue("license")}</span>
				</div>
			)
		},
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
