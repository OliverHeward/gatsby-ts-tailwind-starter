import { forwardRef, ButtonHTMLAttributes } from 'react'
import cx from 'classnames'

export const ButtonCore = forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className = ``, role, ...rest }, ref) => (
	<button
		ref={ref}
		type="button"
		role={role}
		className={cx(`py-3 px-6 appearance-none`, className)}
		{...rest}
	>
		{children}
	</button>
))

ButtonCore.displayName = `ButtonCore`
