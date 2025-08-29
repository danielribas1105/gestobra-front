"use client"
import { IconLogin2 } from "@tabler/icons-react"

interface BtnDefaultProps {
	label: string
	onClick: () => void
}

export default function BtnDefault({ label, onClick }: BtnDefaultProps) {
	return (
		<div>
			<button
				className="flex items-center gap-2 text-lg text-white px-3 py-1 bg-purple-600 hover:bg-purple-800 rounded-md uppercase"
				onClick={onClick}
			>
				<IconLogin2 />
				{label}
			</button>
		</div>
	)
}
