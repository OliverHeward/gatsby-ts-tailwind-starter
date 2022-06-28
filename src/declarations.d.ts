// This file holds ambient type declarations.

// SVG Declarations have already been defined for you, as we love SVGs!
declare module '*.svg' {
	import { ReactElement, SVGProps } from 'react'
	const content: (props: SVGProps<SVGElement>) => ReactElement
	export default content
}
