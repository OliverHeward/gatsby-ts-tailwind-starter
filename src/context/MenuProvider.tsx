import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react'

interface MenuState {
	menuOpen: boolean
	setMenuOpen: Dispatch<SetStateAction<boolean>>
}

const MenuContext = createContext({
	menuOpen: false,
} as MenuState)

const MenuProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false)

	return (
		<MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
			{children}
		</MenuContext.Provider>
	)
}

const useMenuState = () => {
	const context = useContext(MenuContext)

	if (context === undefined)
		throw new Error(`useMenuSTate must be used within a MenuProvider`)

	return context
}

export { MenuProvider, useMenuState }
