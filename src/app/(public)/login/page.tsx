"use client"
import Image from "next/image"
import { LoginForm } from "@/components/login/login-form"
import { useEffect, useState } from "react"
import logo from "@/../public/logo/logo-gestobra-512x512.png"

interface ApiStatus {
	status: string
	timestamp: string
}

export default function LoginPage() {
	const [status, setStatus] = useState<ApiStatus>({
		status: "Carregando...",
		timestamp: "",
	})

	useEffect(() => {
		async function fetchStatus() {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/status`)
				if (!res.ok) throw new Error("Erro ao buscar status")
				const data = await res.json()
				setStatus(data)
			} catch (error) {
				console.error(error)
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
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 py-4">
				<div className="flex flex-col gap-2 justify-center items-center">
					<Image src={logo} alt="Logo Proxy Ambiental" width={256} height={128} className="w-32" />
					<h1 className="text-3xl text-logo-blue-dark font-logo font-bold">GestObra</h1>
				</div>
				<div className="flex flex-1 flex-col gap-3 items-center">
					<div className="w-full max-w-xs">
						<LoginForm />
					</div>
					<div>
						Status:{" "}
						<span className={status.status === "online" ? "text-green-600" : "text-red-600"}>
							{status.status}
						</span>
					</div>
				</div>
			</div>
			<div className="relative hidden bg-muted lg:block">
				<Image
					src=""
					alt="Image"
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
					width={1024}
					height={1024}
				/>
			</div>
		</div>
	)
}
