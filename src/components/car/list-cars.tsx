"use client"
import CarCard from "./car-card"
import { Car } from "@/schemas/car"
import { useQuery } from "@tanstack/react-query"

async function fetchCars(): Promise<Car[]> {
	const res = await fetch("http://localhost:8000/car") // ajuste a URL do seu FastAPI
	if (!res.ok) throw new Error("Erro ao buscar veículos")
	return res.json()
}

export default function ListCars() {
	const {
		data: cars,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["cars"],
		queryFn: fetchCars,
	})

	if (isLoading) return <p>Carregando veículos...</p>
	if (error) return <p>Erro ao carregar veículos</p>

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			{cars && cars.map((car: Car) => <CarCard key={car.id} car={car} />)}
		</div>
	)
}
