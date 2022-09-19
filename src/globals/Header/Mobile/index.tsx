import { useMenuState } from '@/context'
import { Portal } from '@/globals/Portal'
import { HeaderProps } from '@/types/globals'
import { FC } from 'react'

export const Mobile: FC<HeaderProps> = ({
	logo,
	navigtaionLinks = [],
	headerSocials = [],
}) => {
	const { menuOpen, setMenuOpen } = useMenuState()
	return (
		<div className="flex items-center justify-between lg:hidden">
			Mobile Menu
			<div className="bg-black p-4 w-fit" onClick={() => setMenuOpen(true)} />
			{menuOpen && (
				<Portal withBgOpacity={false}>
					<div className="py-10 bg-slate-700 text-white h-full w-full">
						<nav>
							<ul>
								<li>Home</li>
								<li>About</li>
								<li>Contact</li>
							</ul>
						</nav>
					</div>
				</Portal>
			)}
		</div>
	)
}
