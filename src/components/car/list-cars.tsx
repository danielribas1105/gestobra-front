import cars from "@/data/constants/Cars"
import CarCard from "./car-card"
import { Car } from "@/schemas/car"

export default function ListCars() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			{cars.map((car: Car) => (
				<CarCard key={car.id} car={car} />
			))}
		</div>
	)
}
