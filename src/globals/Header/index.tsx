import { useMenuState } from '@/context'
import { FC, HTMLAttributes } from 'react'
import { Desktop } from './Desktop'
import { Mobile } from './Mobile'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
	locale?: string
}

export const Header: FC<HeaderProps> = ({ locale }) => {
	const { menuOpen } = useMenuState()

	return (
		<header className="bg-purple-500 py-2 px-6">
			<Desktop />
			<Mobile />
		</header>
	)
}
