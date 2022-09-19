import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react'

interface PortalState {
	show: boolean
	setShow: Dispatch<SetStateAction<boolean>>
}

const PortalContext = createContext({} as PortalState)

const PortalProvider = ({ children }) => {
	const [show, setShow] = useState<boolean>(false)

	return (
		<PortalContext.Provider value={{ show, setShow }}>
			{children}
		</PortalContext.Provider>
	)
}

const usePortalState = () => {
	const context = useContext(PortalContext)

	if (context === undefined)
		throw new Error(`usePortalState must be used within a PortalProvider..`)

	return context
}

export { PortalProvider, usePortalState }
