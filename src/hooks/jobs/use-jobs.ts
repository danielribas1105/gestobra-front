import { useQuery, useQueryClient } from "@tanstack/react-query"

export const useJobs = () => {
	const query = useQuery({
		queryKey: ["getJobs"],
		queryFn: async () => {
			try {
				//criar o fetch para buscar info no banco e criar a tabela jobs no front
			} catch (error) {
				console.error("Erro ao buscar ou validar os dados da tabela:", error)
				throw new Error("Erro ao carregar dados")
			}
		},
	})

	return {
		...query,
	}
}
