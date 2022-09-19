import { Title } from '@/components/UI/TitleCore'
import { BaseComponentProps } from '@/types'
import { FC } from 'react'

interface HomePageProps extends BaseComponentProps {
	// Base Component Props holds only children - you can either extend it,
	// Or add more props in @/types/index.ts
}

const Home: FC<HomePageProps> = () => {
	return (
		<main>
			<Title.ExtraLarge variant="h1">Hello TypeScript 💙</Title.ExtraLarge>
			<p>A TypeScript starter for Gatsby, with Tailwind CSS preconfigured.</p>
		</main>
	)
}

export default Home
