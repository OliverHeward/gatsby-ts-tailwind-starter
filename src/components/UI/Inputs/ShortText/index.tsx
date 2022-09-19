import { ChangeEvent, FC, HTMLAttributes } from 'react'
import cx from 'classnames'

interface ShortTextProps extends HTMLAttributes<HTMLInputElement> {
	required: boolean
	label?: string
	placeholder?: string
	body?: string
	value?: string
}

export const ShortText: FC<ShortTextProps> = ({
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
