import { ExampleForm } from '@/components/Examples/Form'
import { Anchor } from '@/components/UI/Anchor'
import { Text } from '@/components/UI/TextCore'
import { Title } from '@/components/UI/TitleCore'
import { Layout } from '@/hoc/Layout'
import { BaseComponentProps } from '@/types'
import { FC } from 'react'

interface HomePageProps extends BaseComponentProps {
	// Base Component Props holds only children - you can either extend it,
	// Or add more props in @/types/index.ts
}

const Home: FC<HomePageProps> = () => {
	return (
		<Layout locale={`en`}>
			<Title.ExtraLarge variant="h1">Hello TypeScript 💙</Title.ExtraLarge>
			<Text.Large>
				A TypeScript starter for Gatsby, with Tailwind CSS preconfigured.
			</Text.Large>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
				<Anchor.Core to="/" className="underline text-purple-700">
					This is a core link
				</Anchor.Core>
				<Anchor.Button to="/" className="bg-purple-700 text-white w-fit">
					Link Button
				</Anchor.Button>

				<Anchor.Core
					external
					to="https://google.com"
					className="underline text-purple-700"
				>
					This is an external link
				</Anchor.Core>

				<Anchor.Button
					to="https://google.com"
					external
					className="bg-purple-700 text-white w-fit"
				>
					External Button
				</Anchor.Button>
			</div>

			<ExampleForm />
		</Layout>
	)
}

export default Home
