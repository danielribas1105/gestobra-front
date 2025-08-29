import { Button } from "@/components/ui/button"
import InputForm from "@/components/ui/input-form"
import PageLayout from "@/components/ui/page-layout"
import TitlePage from "@/components/ui/title-page"
import { IconCancel, IconDeviceFloppy } from "@tabler/icons-react"
import Image from "next/image"

export default function EditCar({ params }: { params: { id: number } }) {
	return (
		<PageLayout>
			<section className="flex flex-col gap-5">
				<TitlePage title="Editar Veículo" />
				<div className="flex border border-logo-blue-dark/80 rounded-lg p-4 text-logo-blue-dark">
					<div className="relative w-64 h-64 flex justify-center overflow-hidden">
						<Image
							src="/cars/caminhao-basculante-cacamba.jpg"
							alt="Foto da veiculo"
							fill
							className="object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col flex-1 gap-2 pl-4 text-[16px]">
						<InputForm label="Nome" widthLabel />
						<div className="flex justify-between items-center">
							<InputForm label="Placa" widthLabel />
							<InputForm label="Satus" />
						</div>
						<InputForm label="Motorista" widthLabel />
						<div className="flex justify-between items-center">
							<InputForm label="Fabricação" widthLabel />
							<InputForm label="Km" />
						</div>
						<div className="flex justify-between items-center">
							<InputForm label="Robustez" widthLabel />
							<InputForm label="Capacidade" />
						</div>
						<InputForm label="Observação" widthLabel />
						<div className="flex gap-4 justify-end mt-2">
							<Button variant="defaultSave">
								<IconDeviceFloppy />
								Salvar
							</Button>
							<Button variant="destructive">
								<IconCancel />
								Cancelar
							</Button>
						</div>
					</div>
				</div>
			</section>
		</PageLayout>
	)
}
