import { FC } from 'react'
import { Anchor } from '.'
import { AnchorCoreProps } from './AnchorCore'
import cx from 'classnames'

export const AnchorButton: FC<AnchorCoreProps> = ({
	children,
	className = ``,
	external = false,
	to,
	clickHandler,
}) => (
	<Anchor.Core
		{...{
			className: cx(`py-3 px-6`, className),
			external,
			to,
			clickHandler,
		}}
	>
		{children}
	</Anchor.Core>
)
