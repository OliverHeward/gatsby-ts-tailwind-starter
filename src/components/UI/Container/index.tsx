import { FC, HTMLAttributes } from 'react'
import cx from 'classnames'

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
	children,
	className,
}) => (
	<div className={cx(`mx-auto max-w-screen-2xl w-11/12`, className)}>
		{children}
	</div>
)
