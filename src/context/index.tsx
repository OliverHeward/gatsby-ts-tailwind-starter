import { ReactNode } from 'react'
import { LightboxProvider, useLightboxState } from './LightboxProvider'
import { MenuProvider, useMenuState } from './MenuProvider'
import { PortalProvider, usePortalState } from './PortalProvider'

interface ContextProps {
	children: ReactNode
}

const ContextProvider = ({ children }: ContextProps) => {
	return (
		<PortalProvider>
			<MenuProvider>
				<LightboxProvider>{children}</LightboxProvider>
			</MenuProvider>
		</PortalProvider>
	)
}

export { ContextProvider, useLightboxState, useMenuState, usePortalState }
