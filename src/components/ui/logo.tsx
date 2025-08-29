export default function Logo() {
	return (
		<div className="flex gap-3 items-center">
			<div className="grid grid-cols-2 gap-1">
				<div className="w-6 h-6 bg-purple-400 rounded-tl-lg" />
				<div className="w-6 h-6 bg-amber-400 rounded-tr-lg" />
				<div className="w-6 h-6 bg-blue-400 rounded-bl-lg" />
				<div className="w-6 h-6 bg-green-400 rounded-br-lg" />
			</div>
			<div className="flex items-center gap-1 font-logo">
				<span className="text-6xl">PROXY</span>
				<span className="text-4xl">Ambiental</span>
			</div>
		</div>
	)
}
