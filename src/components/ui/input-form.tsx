interface InputFormProps {
	label: string
	widthLabel?: boolean
	placeholder?: string
	classname?: string
}

export default function InputForm({ label, widthLabel, placeholder, classname }: InputFormProps) {
	return (
		<div className="flex items-center gap-2">
			<span className={`font-bold ${widthLabel && "w-[90px]"}`}>{label}</span>
			<input
				type="text"
				placeholder={placeholder}
				className="flex-1 border border-logo-blue-dark/50 rounded-md px-2 py-1"
			/>
		</div>
	)
}
