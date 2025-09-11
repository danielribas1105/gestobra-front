"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { clearPreDefinedFiltersAtom, preDefinedFiltersAtom } from "@/atoms/filters-case"
import { Table } from "@tanstack/react-table"
import { useAtom, useSetAtom } from "jotai"
import { X } from "lucide-react"
import { useEffect } from "react"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"

interface DataTableToolbarProps<TData> {
	table: Table<TData>
	useFilters?: boolean
}

export function DataTableToolbar<TData>({ table, useFilters }: DataTableToolbarProps<TData>) {
	const globalFilter = table.getState().globalFilter ?? ""
	const isFiltered = !!globalFilter || table.getState().columnFilters.length > 0
	const [filters] = useAtom(preDefinedFiltersAtom)
	const clearFilters = useSetAtom(clearPreDefinedFiltersAtom)

	// Function to clear all filters including atoms
	const handleResetFilters = () => {
		table.resetRowSelection()
		table.resetColumnFilters()
		table.setGlobalFilter("")
		// Optionally, you can also clear atom filters here
		// clearFiltersAtom()
	}

	// useEffect to clear filters when useFilters is false
	useEffect(() => {
		if (!useFilters) {
			clearFilters()
			table.resetColumnFilters()
		}
	}, [useFilters, clearFilters, table])

	return (
		<div className="flex items-center justify-between mb-2">
			<div className="flex flex-1 items-center space-x-2">
				<Input
					placeholder="Filtrar..."
					value={globalFilter}
					onChange={(e) => table.setGlobalFilter(e.target.value)}
					className="h-8 w-[150px] lg:w-[180px]"
				/>
				{table.getColumn("origin_id") && (
					<DataTableFacetedFilter
						column={table.getColumn("origin_id")}
						title="Origem"
						preSelectedValue={useFilters ? filters?.moduleName : undefined}
					/>
				)}
				{table.getColumn("destiny_id") && (
					<DataTableFacetedFilter
						column={table.getColumn("destiny_id")}
						title="Destino"
						preSelectedValue={useFilters ? filters?.equipmentName : undefined}
					/>
				)}
				{table.getColumn("car_id") && (
					<DataTableFacetedFilter
						column={table.getColumn("car_id")}
						title="Placa"
						preSelectedValue={useFilters ? filters?.flangeName : undefined}
					/>
				)}
				{table.getColumn("user_id") && (
					<DataTableFacetedFilter
						column={table.getColumn("user_id")}
						title="Usuário"
						preSelectedValue={useFilters ? filters?.leakage : undefined}
					/>
				)}
				{table.getColumn("statement_id") && (
					<DataTableFacetedFilter
						column={table.getColumn("statement_id")}
						title="Manifesto"
						useFilters={useFilters}
					/>
				)}
				{table.getColumn("status") && (
					<DataTableFacetedFilter
						column={table.getColumn("status")}
						title="Status"
						useFilters={useFilters}
					/>
				)}
				{isFiltered && !useFilters && (
					<Button
						variant="ghost"
						onClick={() => {
							table.resetRowSelection()
							table.resetColumnFilters()
							table.setGlobalFilter("")
						}}
						className="h-8 px-2 lg:px-3"
					>
						Reset
						<X className="ml-1 h-4 w-4" />
					</Button>
				)}
			</div>
		</div>
	)
}
