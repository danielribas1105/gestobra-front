import { Button } from "@/components/ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Column } from "@tanstack/react-table"
import { Check, Funnel, FunnelPlus } from "lucide-react"
import * as React from "react"
import { useEffect, useState } from "react"

interface DataTableFacetedFilterProps<TData, TValue> {
	column?: Column<TData, TValue>
	title?: string
	preSelectedValue?: string | undefined
	useFilters?: boolean
}

export function DataTableFacetedFilter<TData, TValue>({
	column,
	title,
	preSelectedValue,
	useFilters = false,
}: DataTableFacetedFilterProps<TData, TValue>) {
	const facets = column?.getFacetedUniqueValues()
	//const selectedValues = new Set(column?.getFilterValue() as string[])

	// Initialize selectedValues ​​with preSelectedValue if provided
	const [selectedValues, setSelectedValues] = useState<Set<string>>(() => {
		const currentFilter = column?.getFilterValue() as string[] | undefined
		const initialSet = new Set(currentFilter || [])

		// If there is a preselected value and there is no current filter, use the preselected one
		if (preSelectedValue && !currentFilter?.length) {
			initialSet.add(preSelectedValue)
		}

		return initialSet
	})

	// Apply initial filter when preSelectedValue changes
	useEffect(() => {
		if (preSelectedValue && !column?.getFilterValue()) {
			const newValues = new Set([preSelectedValue])
			setSelectedValues(newValues)
			column?.setFilterValue([preSelectedValue])
		}
		// Clear when preSelectedValue is undefined
		else if (!preSelectedValue && column?.getFilterValue()) {
			setSelectedValues(new Set())
			column?.setFilterValue(undefined)
		}
	}, [preSelectedValue, column])

	// Synchronize selectedValues ​​with external filter changes
	useEffect(() => {
		const currentFilter = column?.getFilterValue() as string[] | undefined
		if (currentFilter) {
			setSelectedValues(new Set(currentFilter))
		} else if (!preSelectedValue) {
			// Only clear if there is no preSelectedValue
			setSelectedValues(new Set())
		}
	}, [column?.getFilterValue(), preSelectedValue])

	const options = Array.from(facets?.entries() ?? [])
		.map(([value, count]) => ({
			label: String(value),
			value: String(value),
			count,
		}))
		.sort((a, b) => a.label.localeCompare(b.label))

	const handleSelectOption = (optionValue: string) => {
		const newSelectedValues = new Set(selectedValues)

		if (newSelectedValues.has(optionValue)) {
			newSelectedValues.delete(optionValue)
		} else {
			newSelectedValues.add(optionValue)
		}

		setSelectedValues(newSelectedValues)

		const filterValues = Array.from(newSelectedValues)
		column?.setFilterValue(filterValues.length ? filterValues : undefined)
	}

	const clearFilters = () => {
		setSelectedValues(new Set())
		column?.setFilterValue(undefined)
	}

	// Determine whether to disable it
	const isDisabled = !!preSelectedValue || useFilters

	//console.log("Facedfilter filter", preSelectedValue, "isDisabled:", isDisabled)

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className={cn("h-8 border-dashed", isDisabled && "opacity-50 cursor-not-allowed")}
					disabled={isDisabled}
				>
					{selectedValues?.size > 0 ? <FunnelPlus /> : <Funnel />}
					{title}
					{selectedValues?.size > 0 && isDisabled && (
						<div className="ml-1 rounded bg-muted px-1 text-xs">{selectedValues.size}</div>
					)}
				</Button>
			</PopoverTrigger>
			{!isDisabled && (
				<PopoverContent className="w-auto max-w-full min-w-[120px] p-0" align="start">
					<Command>
						<CommandInput placeholder={title} />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup>
								{options.map((option) => {
									const isSelected = selectedValues.has(option.value)
									return (
										<CommandItem
											key={option.value}
											onSelect={() => handleSelectOption(option.value)}
										>
											<div
												className={cn(
													"mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
													isSelected
														? "bg-primary text-primary-foreground"
														: "opacity-50 [&_svg]:invisible",
												)}
											>
												<Check />
											</div>
											{option && <option className="mr-2 h-4 w-4 text-muted-foreground" />}
											<span>{option.label}</span>
											{facets?.get(option.value) && (
												<span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
													{facets.get(option.value)}
												</span>
											)}
										</CommandItem>
									)
								})}
							</CommandGroup>
							{selectedValues.size > 0 && (
								<>
									<CommandSeparator />
									<CommandGroup>
										<CommandItem onSelect={clearFilters} className="justify-center text-center">
											Clear filters
										</CommandItem>
									</CommandGroup>
								</>
							)}
						</CommandList>
					</Command>
				</PopoverContent>
			)}
		</Popover>
	)
}
