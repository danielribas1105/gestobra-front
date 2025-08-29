interface InputTextProps {
	label: string
	placeholder?: string
	value: string
	type?: "text" | "email" | "password" | "date"
	onChange: (value: string) => void
}

export default function InputText({ label, placeholder, value, type, onChange }: InputTextProps) {
	return (
		<div className="flex flex-col items-start bg-white dark:bg-black">
			<label>{label}</label>
			<input
				className="w-full border border-zinc-900 dark:border-zinc-400 rounded-3xl px-3 py-1"
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	)
}
