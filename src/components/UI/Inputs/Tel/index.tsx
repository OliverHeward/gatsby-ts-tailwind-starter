import { ChangeEvent, FC, HTMLAttributes } from 'react'
import cx from 'classnames'

interface TelProps extends HTMLAttributes<HTMLInputElement> {
	required: boolean
	label?: string
	placeholder?: string
	body?: string
	value?: string
}

export const Tel: FC<TelProps> = ({
	required,
	placeholder,
	label,
	body,
	value,
	onChange,
	className,
	...rest
}) => {
	const _onChange = ({
		currentTarget: { value: _value },
	}: ChangeEvent<HTMLInputElement>) => {
		onChange(_value)
	}

	return (
		<input
			{...{
				type: `text`,
				required,
				placeholder: placeholder || label || body,
				value,
				onChange: _onChange,
				className: cx(`appearance-none outline-none focus:ring-0 p-4`, className),
				...rest,
			}}
		/>
	)
}
