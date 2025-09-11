"use client"
import { ColumnDef, flexRender, getCoreRowModel, Row, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DataTableToolbar } from "./data-table-toolbar"
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button"

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	useFilters?: boolean
	closeDialog?: () => void
}

const globalFilterFn = <TData,>(row: Row<TData>, columnId: string, filterValue: string) => {
	const search = filterValue.toLowerCase()
	const keys = ["origin", "destiny", "car", "user", "status"]

	return keys.some((key) => {
		const value = row.original[key as keyof TData]
		return String(value ?? "")
			.toLowerCase()
			.includes(search)
	})
}

export function DataTable<TData, TValue>({
	columns,
	data,
	useFilters,
	closeDialog,
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		globalFilterFn,
	})

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<DataTableToolbar table={table} />
				<DropdownMenu>
					{!useFilters && (
						<DropdownMenuTrigger asChild>
							<Button variant="outline" className="flex flex-row items-center space-x-2">
								View
							</Button>
						</DropdownMenuTrigger>
					)}
					<DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => (
								<DropdownMenuCheckboxItem
									key={column.id}
									className="capitalize"
									checked={column.getIsVisible()}
									onCheckedChange={(value) => column.toggleVisibility(!!value)}
								>
									{column.id}
								</DropdownMenuCheckboxItem>
							))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="overflow-hidden rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}
