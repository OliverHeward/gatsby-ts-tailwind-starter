import Title from '@/components/Title'
import { BaseComponentProps } from '@/types'
import { FC } from 'react'

interface HomePageProps extends BaseComponentProps {
	// Base Component Props holds only children - you can either extend it,
	// Or add more props in @/types/index.ts
}

const Home: FC<HomePageProps> = () => {
	return (
		<main>
			<Title>Hello TypeScript 💙</Title>
			<p>A TypeScript starter for Gatsby, with Tailwind CSS preconfigured.</p>
		</main>
	)
}

export default Home
