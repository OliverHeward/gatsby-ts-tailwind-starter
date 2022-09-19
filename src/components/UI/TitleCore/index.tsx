import React, { FC, HTMLAttributes, ReactNode } from 'react'
import cx from 'classnames'

type Sizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'

interface TitleCoreProps<T = unknown> extends HTMLAttributes<T> {
	children: ReactNode
	className?: string
	variant: Sizes
}

const TitleCore: FC<TitleCoreProps> = ({
	className = ``,
	variant = `h1`,
	children,
	...rest
}) => {
	const Tag = `${variant}` as keyof JSX.IntrinsicElements

	return (
		// TODO: Add your font name from tailwind into the string of cx
		<Tag {...rest} className={cx(``, className)}>
			{children}
		</Tag>
	)
}

const TitleCoreExtraLarge: FC<TitleCoreProps> = ({
	children,
	className = ``,
	...rest
}) => (
	<TitleCore
		{...rest}
		className={cx(
			`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold`,
			className
		)}
	>
		{children}
	</TitleCore>
)

const TitleCoreLarge: React.FC<TitleCoreProps> = ({
	children,
	className = ``,
	...rest
}) => (
	<TitleCore
		{...rest}
		className={cx(`text-4xl md:text-4xl lg:text-5xl font-bold`, className)}
	>
		{children}
	</TitleCore>
)

const TitleCoreMedium: React.FC<TitleCoreProps> = ({
	children,
	className = ``,
	...rest
}) => (
	<TitleCore
		{...rest}
		className={cx(`text-3xl font-normal lg:text-4xl `, className)}
	>
		{children}
	</TitleCore>
)

const TitleCoreSmall: React.FC<TitleCoreProps> = ({
	children,
	className = ``,
	...rest
}) => (
	<TitleCore {...rest} className={cx(`text-xl md:text-2xl`, className)}>
		{children}
	</TitleCore>
)

const TitleCoreExtraSmall: React.FC<TitleCoreProps> = ({
	children,
	className = ``,
	...rest
}) => (
	<TitleCore {...rest} className={cx(`text-lg`, className)}>
		{children}
	</TitleCore>
)

export const Title = {
	ExtraLarge: TitleCoreExtraLarge,
	Large: TitleCoreLarge,
	Medium: TitleCoreMedium,
	Small: TitleCoreSmall,
	ExtraSmall: TitleCoreExtraSmall,
}
