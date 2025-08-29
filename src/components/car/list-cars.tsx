import cars from "@/data/constants/Cars"
import CarCard from "./car-card"

export default function ListCars() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			{cars.map((car) => (
				<CarCard key={car.id} car={car} />
			))}
		</div>
	)
}
