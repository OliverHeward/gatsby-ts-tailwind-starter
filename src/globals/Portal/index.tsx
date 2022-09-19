import { FC, ReactNode, useEffect, useState } from 'react'
import cx from 'classnames'
import { createPortal } from 'react-dom'

interface PortalProps {
	children: ReactNode
	className?: string
	withBgOpacity?: boolean
}

const portalRoot =
	typeof document !== `undefined`
		? (document.getElementById(`portal`) as HTMLElement)
		: null

export const Portal: FC<PortalProps> = ({
	children,
	className,
	withBgOpacity,
}) => {
	const [isBrowser, setIsBrowser] = useState<boolean>(false)

	useEffect(() => {
		setIsBrowser(true)

		return () => {
			// Clean up
			setIsBrowser(false)
		}
	}, [])

	const portal = (
		<div
			className={cx(
				`fixed top-0 left-0 w-full h-full flex justify-center items-center ${withBgOpacity ? `bg-black bg-opacity-80` : ``
				} portal z-50`,
				className
			)}
		>
			{children}
		</div>
	)

	return isBrowser ? createPortal(portal, portalRoot) : null
}
