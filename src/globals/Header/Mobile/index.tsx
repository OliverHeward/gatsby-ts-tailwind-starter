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
		<div>
			<div className="p-4 bg-purple-600" onClick={() => setMenuOpen(true)} />
			{menuOpen && (
				<Portal withBgOpacity={false}>
					{
						// ! Do something now that the menu has been opened
					}
				</Portal>
			)}
		</div>
	)
}
