"use client"
import { useEffect, useState } from "react"
import BtnDefault from "./btn-default"
import Logo from "./logo"
import Menu from "./menu"
import ModalRegisterUser from "./modal-register-user"
import ModalLogin from "./modal-login"
import Link from "next/link"
import PageLayout from "./page-layout"
import { useRouter } from "next/navigation"

export default function Header() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isRegisterOpen, setIsRegisterOpen] = useState(false)

	let token = null
	useEffect(() => {
		token = sessionStorage.getItem("token")
		setHasUserLogin(token !== null)
	}, [])
	const [hasUserLogin, setHasUserLogin] = useState<boolean>(token !== null)

	const openModalLogin = () => setIsLoginOpen(true)
	const openModalRegister = () => setIsRegisterOpen(true)
	const closeModalLogin = () => {
		setIsLoginOpen(false)
		//setHasUserLogin(true)
	}
	const closeModalRegister = () => setIsRegisterOpen(false)
	const logoutUser = () => {
		sessionStorage.removeItem("token")
		setHasUserLogin(false)
	}

	function openHome() {
		const route = useRouter()
		route.push("/home")
	}

	return (
		<>
			<header className="bg-white dark:bg-black">
				<PageLayout className="flex justify-between items-center py-2">
					<Logo />
					<div className="flex gap-10 items-center">
						{!hasUserLogin ? (
							<>
								<Menu />
								<Link href={"/home"}>GestObra</Link>
								{/* <BtnDefault label="Login" onClick={openModalLogin} />
								<BtnDefault label="Cadastrar" onClick={openModalRegister} /> */}
							</>
						) : (
							<>
								<Link href={"/account"}>Minha Conta</Link>
								<BtnDefault label="Logout" onClick={logoutUser} />
							</>
						)}
					</div>
				</PageLayout>
			</header>
			<ModalLogin isOpen={isLoginOpen} onCloseLogin={closeModalLogin} />
			<ModalRegisterUser isOpen={isRegisterOpen} onClose={closeModalRegister} />
		</>
	)
}
