import { FC } from 'react'
import SVG from 'react-inlinesvg'
import svgs from './svgs'

type IconProps = {
	name?: string
	src?: string
	className?: string
	alt?: string
}

export const Icon: FC<IconProps> = ({ name, src = null, className }) =>
	name || src ? <SVG src={src || svgs[name]} {...{ className }} /> : null

export default Icon
