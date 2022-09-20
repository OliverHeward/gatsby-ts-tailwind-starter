import { Button } from '@/components/UI/Button'
import { Boolean } from '@/components/UI/Inputs/Boolean'
import { FreeText } from '@/components/UI/Inputs/FreeText'
import { ShortText } from '@/components/UI/Inputs/ShortText'
import { Tel } from '@/components/UI/Inputs/Tel'
import { FC, useState, useEffect } from 'react'

export const ExampleForm: FC = () => {
	const [firstName, setFirstName] = useState<string>(``)
	const [freeText, setFreeText] = useState<string>(``)

	const [telephone, setTelephone] = useState<string>(``)

	const [boolean, setBoolean] = useState<boolean>(false)

	useEffect(() => {
		console.log(freeText)
	}, [freeText])

	return (
		<form>
			<ShortText onChange={(value) => setFirstName(value)} value={firstName} />
			<FreeText onChange={(value) => setFreeText(value)} value={freeText} />

			<Tel
				onChange={(value) => setTelephone(value)}
				value={telephone}
				required={false}
			/>

			<Boolean
				onChange={() => setBoolean(!boolean)}
				value={boolean}
				required={true}
			/>

			<Button.Core type="submit">Submit</Button.Core>
		</form>
	)
}
