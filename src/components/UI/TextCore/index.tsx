import cx from 'classnames'
import { FC, HTMLAttributes } from 'react'

interface TextCoreProps extends HTMLAttributes<HTMLParagraphElement> {
	noMargin?: boolean
}

const TextCore: FC<TextCoreProps> = ({
	children,
	className = ``,
	noMargin = false,
	...rest
}) => {
	const marginBottom = noMargin ? `` : `mb-6`

	return (
		// TODO: Add your font name from Tailwindcss as a classname on this component
		<p {...rest} className={cx(`${marginBottom}`, className)}>
			{children}
		</p>
	)
}

const TextLarge: FC<TextCoreProps> = ({
	children,
	className = ``,
	...rest
}) => (
	<TextCore {...rest} className={cx(`text-xl`, className)}>
		{children}
	</TextCore>
)

const TextMedium: FC<TextCoreProps> = ({
	children,
	className = ``,
	...rest
}) => (
	<TextCore {...rest} className={cx(`text-md`, className)}>
		{children}
	</TextCore>
)

const TextSmall: FC<TextCoreProps> = ({
	children,
	className = ``,
	...rest
}) => (
	<TextCore {...rest} className={cx(`text-sm`, className)}>
		{children}
	</TextCore>
)

export const Text = {
	Large: TextLarge,
	Medium: TextMedium,
	Small: TextSmall,
}
