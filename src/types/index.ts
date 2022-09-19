import { ReactNode } from 'react'

export interface BaseComponentProps {
	children?: ReactNode
}

export interface PageProps {
	pages: {
		edges: {
			node: {
				id: number
				locale?: string
				slug: string
			}
		}
	}
}

export interface SiteQueryProps {
	data?: {
		pages: PageProps[]
	}
	errors?: any
}

export interface MetadataProps {
	description: string
	title: string
	twitterCard: string
	image: {
		url: string
	}
}

export interface DatoBaseProps {
	__typename?: string
	id?: string
	key?: string
	className?: string
}
