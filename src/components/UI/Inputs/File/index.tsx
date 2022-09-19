import React, { FC } from 'react'
import { ButtonCore } from '../../Button/ButtonCore'

interface FileUpload {
	name: string | null
	base64: string | null
}

interface FileProps {
	key?: string
	id?: string
	supportedFileTypes?: []
	placeholder: string | null
	label: string | null
	body: string | null
	required: boolean
	value: FileUpload | null
	onChange: any
}

export const InputFile: FC<FileProps> = ({
	key,
	id,
	required = false,
	placeholder,
	label,
	body,
	value,
	supportedFileTypes,
	onChange,
}) => {
	const getBase64 = (file: any) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			onChange({
				name: file.name,
				value: reader.result.split(',')[1],
			})
		}
	}

	const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.currentTarget.files
		const file = files?.[0]

		if (file) {
			getBase64(file)
		} else {
			onChange(``)
		}
	}

	return (
		<label htmlFor={key || id} className="relative cursor-pointer">
			<span className="block mb-4">{placeholder || label || body}</span>
			<div className="">
				<ButtonCore className="py-2 px-6 bg-gradient-sunrise">Upload</ButtonCore>
				{/* <Button.SVG name="darkTurq" className="m-0 text-white hover:text-tertiary-600" textClass="flex items-center justify-center">{value?.name ? value?.name : 'Attach'}</Button.SVG> */}
			</div>
			<input
				{...{
					id: key || id,
					name: key || id,
					type: `file`,
					required,
					onChange: _onChange,
					className: ``,
				}}
				accept={`pdf`}
			/>
		</label>
	)
}
