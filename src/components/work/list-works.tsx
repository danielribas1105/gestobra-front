import { Work } from "@/schemas/work"
import WorkCard from "./work-card"
import works from "@/data/constants/Works"

export default function ListWorks() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			{works && works.map((work: Work) => <WorkCard key={work.id} work={work} />)}
		</div>
	)
}
