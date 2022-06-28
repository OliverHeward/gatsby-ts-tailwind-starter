import { ReactNode } from 'react'

type TitleProps = {
	children: ReactNode
}

export default function Title({ children }: TitleProps) {
	return <h1 className="uppercase font-bold font-sans text-3xl">{children}</h1>
}
