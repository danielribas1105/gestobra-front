"use client"
import { columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"
import PageLayout from "@/components/ui/page-layout"
import TitlePage from "@/components/ui/title-page"
import { Job } from "@/schemas/job"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import jobs from "@/data/constants/Jobs"

interface ApiStatus {
	status: string
	timestamp: string
}

async function fetchJobs(): Promise<Job[]> {
	const res = await fetch("http://localhost:8000/job") // ajuste a URL do seu FastAPI
	if (!res.ok) throw new Error("Erro ao buscar viagens")
	return res.json()
}

export default function Home() {
	const [status, setStatus] = useState<ApiStatus>({
		status: "Carregando...",
		timestamp: "",
	})

	const {
		data: jobsDb,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["jobs"],
		queryFn: fetchJobs,
	})

	useEffect(() => {
		async function fetchStatus() {
			try {
				const res = await fetch("http://127.0.0.1:8000/status")
				if (!res.ok) throw new Error("Erro ao buscar status")
				const data = await res.json()
				setStatus(data)
			} catch (error) {
				setStatus({
					status: "Offline",
					timestamp: new Date().toLocaleString("pt-BR"),
				})
			}
		}

		fetchStatus()
		const interval = setInterval(fetchStatus, 5000) // atualiza a cada 5s

		return () => clearInterval(interval)
	}, [])

	if (isLoading) return <p>Carregando viagens...</p>
	/* if (error) return <p>Erro ao carregar viagens</p> */

	return (
		<PageLayout>
			<section>
				<div className="flex flex-col gap-3 md:gap-0">
					<TitlePage title="GestObra" textButton="Adicionar Viagem" />
					<div className="flex flex-col items-start text-xl mb-4">
						<div className="flex gap-2">
							<span>
								Status:
							</span>
							<span className={status.status === "online" ? "text-green-600" : "text-red-600"}>
								{status.status === "online" ? "online" : "offline"}
							</span>
						</div>
						<div className="text-sm text-gray-400">Última atualização: {status.timestamp}</div>
					</div>
				</div>
				{jobs && <DataTable columns={columns} data={jobs}/> }
			</section>
		</PageLayout>
	)
}
