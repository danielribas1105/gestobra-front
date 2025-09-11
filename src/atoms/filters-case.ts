import { DefinedFilters } from "@/types/api/case"
import { atom } from "jotai"

// 1. Basic atom to store filters
export const preDefinedFiltersAtom = atom<DefinedFilters | null>(null)

// 2. Atom derivative for write actions (more functional)
export const setPreDefinedFiltersAtom = atom(null,
   (get, set, filters: DefinedFilters) => {
      console.log("Setting filters:", filters)
      set(preDefinedFiltersAtom, filters)
   }
)

// 3. Atom derivative to clean the filters
export const clearPreDefinedFiltersAtom = atom(null, (get, set) => {
   set(preDefinedFiltersAtom, null)
})

// 4. Atom derivative to partially update filters
export const updatePreDefinedFiltersAtom = atom( null,
   (get, set, partialFilters: Partial<DefinedFilters>) => {
      const currentFilters = get(preDefinedFiltersAtom)
      const newFilters = currentFilters
         ? { ...currentFilters, ...partialFilters }
         : (partialFilters as DefinedFilters)

      set(preDefinedFiltersAtom, newFilters)
   }
)

// 5. Atom to check for active filters
export const hasActiveFiltersAtom = atom((get) => {
   const filters = get(preDefinedFiltersAtom)
   return (
      filters !== null &&
      (!!filters.moduleName || !!filters.flangeName || !!filters.equipmentName || !!filters.leakage || !!filters.flow)
   )
})

// 6. Atom to get query params from filters
export const filtersToQueryParamsAtom = atom((get) => {
   const filters = get(preDefinedFiltersAtom)
   if (!filters) return ""

   const params = new URLSearchParams()
   if (filters.moduleName) params.append("module", filters.moduleName)
   if (filters.flangeName) params.append("flange", filters.flangeName)
   if (filters.equipmentName) params.append("equipment", filters.equipmentName)
   if (filters.leakage) params.append("leakage", filters.leakage)
   if (filters.flow) params.append("flow", filters.flow)

   return params.toString()
})
