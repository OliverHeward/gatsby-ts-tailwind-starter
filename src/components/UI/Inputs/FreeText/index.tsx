import { FC, ChangeEvent } from 'react'
import cx from 'classnames'

interface FreeTextProps {
	required: boolean
	placeholder: string
	label: string
	body: string
	value: string
	className: string
	onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void
}

export const FreeText: FC<FreeTextProps> = ({
	required = false,
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
	}: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(_value)
	}

	return (
		<textarea
			{...{
				required,
				rows: 6,
				placeholder: placeholder || label || body,
				value,
				onChange: _onChange,
				className: cx(`outline-none appearance-none focus:ring-0`, className),
				...rest,
			}}
		/>
	)
}
