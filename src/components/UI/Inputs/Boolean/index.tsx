import { FC, HTMLAttributes } from 'react'

interface BooleanProps extends HTMLAttributes<HTMLInputElement> {
	required: boolean
	placeholder?: string
	label?: string
	body?: string
	value: boolean
	onChange: () => void
}

export const Boolean: FC<BooleanProps> = ({
	required,
	placeholder,
	label,
	body,
	value,
	onChange,
	...rest
}) => {
	const _onChange = () => {
		onChange(!value)
	}

	return (
		<label className="flex items-center justify-start">
			<div className="relative">
				<div className="w-7 h-7 mr-4 relative border-4 border-black">
					<div
						className={`w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${value ? `bg-black` : `bg-transparent`
							}`}
					/>
				</div>
				<input
					{...{
						type: `checkbox`,
						required,
						checked: value,
						onChange: _onChange,
						className: `absolute top-0 left-0 opacity-0 pointer-events-none`,
						...rest,
					}}
				/>
			</div>
			<span>{label || placeholder || body}</span>
		</label>
	)
}
