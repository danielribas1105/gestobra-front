import Link from "next/link"
import Image from "next/image"
import { IconCircleFilled } from "@tabler/icons-react"
import Car from "@/data/models/Car"

export interface CarCardProps {
	car: Car
}

export default function CarCard({ car }: CarCardProps) {
	return (
		<Link href={`/cars/${car.id}`}>
			<article className="w-56 h-64 border-2 rounded-lg p-2 flex flex-col gap-2">
				<div className="relative w-full h-36 flex justify-center overflow-hidden">
					<Image src={car.imagemURL} alt="Foto da veiculo" fill className="object-cover rounded-lg" />
				</div>
				<div className="flex flex-col gap-1">
					<header>{car.nome}</header>
					<section>Código: {car.id}</section>
					<footer className="flex items-center gap-1">
						<IconCircleFilled size={16} color={car.status === "ativo" ? "#00FF00" : "#FF0000"} />
						<span className="text-sm uppercase">{car.status}</span>
					</footer>
				</div>
			</article>
		</Link>
	)
}
