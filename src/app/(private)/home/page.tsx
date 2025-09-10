"use client"
import PageLayout from "@/components/ui/page-layout"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import TitlePage from "@/components/ui/title-page"
import { useEffect, useState } from "react"
import jobs from "@/data/constants/Jobs"

interface ApiStatus {
	status: string
	timestamp: string
}

export default function Home() {
	const [status, setStatus] = useState<ApiStatus>({
		status: "Carregando...",
		timestamp: "",
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
	return (
		<PageLayout>
			<section>
				<div className="flex flex-col gap-3 md:gap-0">
					<TitlePage title="GestObra" placeholder="Busca" textButton="Adicionar Viagem" />
					<div className="flex flex-col items-start justify-evenly text-xl">
						<div>
							Status:{" "}
							<span className={status.status === "online" ? "text-green-600" : "text-red-600"}>
								{status.status}
							</span>
						</div>
						<div className="mt-2 text-sm text-gray-400">Última atualização: {status.timestamp}</div>
					</div>
				</div>
				<div>
					<Table>
						<TableCaption>Lista das vigens realizadas</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Data</TableHead>
								<TableHead>Origem</TableHead>
								<TableHead>Destino</TableHead>
								<TableHead>Placa</TableHead>
								<TableHead>Motorista</TableHead>
								<TableHead className="text-right">M3</TableHead>
								<TableHead>Manifesto</TableHead>
								<TableHead>Usuário</TableHead>
								<TableHead>Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{jobs.map((job) => (
								<TableRow key={job.id}>
									<TableCell className="font-medium">{job.created_at}</TableCell>
									<TableCell>{job.origin_id}</TableCell>
									<TableCell>{job.destiny_id}</TableCell>
									<TableCell>{job.car_id}</TableCell>
									<TableCell>{job.car_id}</TableCell>
									<TableCell className="text-right">{job.m3}</TableCell>
									<TableCell>{job.statement_id}</TableCell>
									<TableCell>{job.user_id}</TableCell>
									<TableCell>{job.status}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</section>
		</PageLayout>
	)
}
