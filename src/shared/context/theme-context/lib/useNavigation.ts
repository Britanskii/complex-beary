import { NavigationContext } from "../ui/NavigationContext"
import { useContext } from "react"

interface UseThemeResult {
	onClose: () => void
	onOpen: () => void
	toggleOpen: () => void
	open: boolean
}

export const useNavigation = (): UseThemeResult => {
	const { open, setOpen } = useContext(NavigationContext)

	const onClose = () => {
		setOpen!(false)
	}

	const onOpen = () => {
		setOpen!(true)
	}

	const toggleOpen = () => {
		setOpen!(!open)
	}

	return { open, onClose, onOpen, toggleOpen } as UseThemeResult
}

