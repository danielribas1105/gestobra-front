import logo from "@/../public/logo/logo-gestobra-512x512.png"
import fotoObra from "@/../public/app-gestobra-01.jpg"
import { LoginForm } from "@/components/login/login-form"
import Image from "next/image"

export default function LoginPage() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-6 py-4">
				<div className="flex flex-col gap-2 items-center">
					<Image src={logo} alt="Logo Proxy Ambiental" width={256} height={128} className="w-32" />
					<h1 className="text-3xl text-logo-blue-dark font-logo font-bold">GestObra</h1>
				</div>
				<div className="flex flex-1 justify-center">
					<LoginForm />
				</div>
			</div>
			<div className="relative hidden bg-muted lg:block">
				<Image
					src={fotoObra}
					alt="Image"
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
					width={1024}
					height={1024}
				/>
				<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
			</div>
		</div>
	)
}
