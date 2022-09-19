import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react'

interface LightboxState {
	lightboxOpen: boolean
	setLightboxOpen: Dispatch<SetStateAction<boolean>>
	activeLightboxImage: number
	setActiveLightboxImage: Dispatch<SetStateAction<number>>
	lightboxImages: any[] // !this needs to have a type change here when a decision is made on how data is stored on images
	setLightboxImages: Dispatch<SetStateAction<any[]>>
	lightboxVideo: boolean
	setLightboxVideo: Dispatch<SetStateAction<boolean>>
}

const LightboxContext = createContext({} as LightboxState)

const LightboxProvider = ({ children }) => {
	const [lightboxOpen, setLightboxOpen] = useState<boolean>(false)
	const [activeLightboxImage, setActiveLightboxImage] = useState<number>(0)
	const [lightboxImages, setLightboxImages] = useState([])
	const [lightboxVideo, setLightboxVideo] = useState<boolean>(false)

	return (
		<LightboxContext.Provider
			value={{
				lightboxOpen,
				setLightboxOpen,
				activeLightboxImage,
				setActiveLightboxImage,
				lightboxImages,
				setLightboxImages,
				lightboxVideo,
				setLightboxVideo,
			}}
		>
			{children}
		</LightboxContext.Provider>
	)
}

const useLightboxState = () => {
	const context = useContext(LightboxContext)

	if (context === undefined)
		throw new Error(`useLightboxState must be used within a LightboxProvider..`)

	return context
}

export { LightboxProvider, useLightboxState }
