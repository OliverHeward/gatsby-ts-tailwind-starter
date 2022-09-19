import { HeaderProps } from '@/types/globals'
import { FC } from 'react'

export const Desktop: FC<HeaderProps> = ({
	logo,
	navigationLinks = [],
	headerSocials = [],
}) => {
	return <div className="lg:block hidden">Desktop Header</div>
}
