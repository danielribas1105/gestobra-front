import Link from "next/link"
import Image from "next/image"
import { IconCircleFilled } from "@tabler/icons-react"
import { Work } from "@/schemas/work"

export interface WorkCardProps {
	work: Work
}

export default function WorkCard({ work }: WorkCardProps) {
	return (
		<Link href={`/obras/${work.id}`}>
			<article className="w-56 h-64 border-2 rounded-lg p-2 flex flex-col gap-2">
				<div className="relative w-full h-36 flex justify-center overflow-hidden">
					<Image src={work.image_url} alt="Foto da obra" fill className="object-cover rounded-lg" />
				</div>
				<header>{work.name}</header>
				<section>Código: {work.id}</section>
				<footer className="flex items-center gap-1">
					<IconCircleFilled
						size={16}
						color={work.active ? "#00FF00" : "#FF0000"}
					/>
					<span className="text-sm uppercase">{work.active}</span>
				</footer>
			</article>
		</Link>
	)
}
