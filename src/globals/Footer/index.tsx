import { FC } from 'react'

export const Footer: FC<{ locale: string }> = ({ locale = `en` }) => {
	return <footer className="py-6 px-4 bg-slate-700 text-white">Footer</footer>
}
