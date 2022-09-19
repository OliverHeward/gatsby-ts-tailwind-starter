import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface HeaderProps {
	locale: string
	logo: {
		gatsbyImageData: IGatsbyImageData
		alt: string
	}
	navigationLinks: {
		slug: string
		pageName: string
	}[]
	headerSocials: {
		socialType: string
		socialLink: string
	}[]
}
