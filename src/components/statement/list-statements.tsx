"use client"
import { Statement } from "@/schemas/statements"
import { useQuery } from "@tanstack/react-query"
import StatementCard from "./statement-card"
import StatementData from "@/data/constants/Statements"

async function fetchStatements(): Promise<Statement[]> {
	const res = await fetch("http://localhost:8000/statement") // ajuste a URL do seu FastAPI
	if (!res.ok) throw new Error("Erro ao buscar manifesto")
	return res.json()
}

export default function ListStatements() {
	const {
		data: statements,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["statements"],
		queryFn: fetchStatements,
	})

	if (isLoading) return <p>Carregando manifestos...</p>
	/* if (error) return <p>Erro ao carregar manifestos</p> */

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			{StatementData && StatementData.map((statement: Statement) => 
            <StatementCard key={statement.id} statement={statement} />)
         }
		</div>
	)
}
