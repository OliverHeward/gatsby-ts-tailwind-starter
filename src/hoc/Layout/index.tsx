import { FC, ReactNode } from 'react'
import { Header } from '@/globals/Header'
import { Footer } from '@/globals/Footer'

export const Layout: FC<{ children: ReactNode; locale: string }> = ({
	children,
}) => {
	return (
		<div>
			<Header locale={`en`} />
			<div className="mt-[68px]">{children}</div>
			<Footer locale={`en`} />
		</div>
	)
}
