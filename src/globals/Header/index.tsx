import { useMenuState } from '@/context'
import { FC, HTMLAttributes } from 'react'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
	locale?: string
}

export const Header: FC<HeaderProps> = ({ locale }) => {
	const { menuOpen } = useMenuState()

	return <header>Header</header>
}
