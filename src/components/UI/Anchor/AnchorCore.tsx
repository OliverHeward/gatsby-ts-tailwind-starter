import cx from 'classnames'
import { ReactNode, MouseEvent, FC } from 'react'
import { GatsbyLinkProps, Link } from 'gatsby'

export interface AnchorCoreProps extends GatsbyLinkProps<{ state: false }> {
	className?: string
	children: ReactNode
	external?: boolean
	clickHandler?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export const AnchorCore: FC<AnchorCoreProps> = ({
	children,
	className = ``,
	to,
	clickHandler,
	external = false,
}) =>
	external ? (
		<a
			{...{
				href: to,
				className: cx(`outline-none block`, className),
				onClick: clickHandler,
				rel: `nofollow noopenner noreferrer`,
				target: `_blank`,
			}}
		>
			{children}
		</a>
	) : (
		<Link
			{...{
				to,
				className: cx(`outline-none block`, className),
				onClick: clickHandler,
			}}
		>
			{children}
		</Link>
	)
