import { IconX } from "@tabler/icons-react"
import axios from "axios"
import Image from "next/image"
import { useState } from "react"
import loginImage from "../../../public/login.png"
import InputText from "./input-text"

interface ModalLoginProps {
	isOpen: boolean
	onCloseLogin: () => void
}

export default function ModalLogin({ isOpen, onCloseLogin }: ModalLoginProps) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	if (!isOpen) return null

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onCloseLogin()
		}
	}

	const onSubmitForm = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault()
		const user = {
			email,
			password,
		}

		axios
			.post("http://localhost:8000/public/login", user)
			.then((response) => {
				sessionStorage.setItem("token", response.data.access_token)
				setEmail("")
				setPassword("")
			})
			.catch((e) => {
				if (e.response.data.message) {
					alert(e.response.data.message)
				} else {
					alert("Erro inesperado!")
				}
			})

		/* console.log(user) */
		onCloseLogin()
	}

	return (
		<>
			<div
				className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50"
				onClick={handleBackdropClick}
			>
				<section className="absolute top-30 left-100 flex items-center justify-around gap-10 p-4 bg-white dark:bg-black rounded-3xl shadow-zinc-800 dark:shadow-zinc-300 shadow-xs">
					<button
						onClick={onCloseLogin}
						className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
					>
						<IconX />
					</button>
					<Image src={loginImage} alt="Figura realizar login" width={200} height={200} />
					<form className="flex flex-col gap-3" onSubmit={onSubmitForm}>
						<InputText
							label="E-mail"
							type="email"
							placeholder="seuemail@maneiro.com.br"
							value={email}
							onChange={setEmail}
						/>
						<InputText
							label="Senha"
							type="password"
							placeholder="Mínimo de 6 caracteres"
							value={password}
							onChange={setPassword}
						/>
						<div className="flex justify-between items-center gap-10 border-b-2 border-zinc-700 pb-4">
							<label className="underline decoration-zinc-300 underline-offset-4">
								Esqueci minha senha
							</label>
							<button className="flex justify-center gap-2 text-lg text-white px-3 py-1 bg-purple-600 hover:bg-purple-800 rounded-md">
								Fazer Login
							</button>
						</div>
						<div className="flex justify-between items-center gap-10">
							<label className="font-bold">Ainda não tem uma conta?</label>
							<button className="flex justify-center gap-2 text-lg text-white px-3 py-1 bg-purple-600 hover:bg-purple-800 rounded-md">
								Criar conta
							</button>
						</div>
					</form>
				</section>
			</div>
		</>
	)
}
