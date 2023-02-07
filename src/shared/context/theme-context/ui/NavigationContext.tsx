import {createContext, FC, ReactNode, useMemo, useState} from "react"

export interface ThemeContextProps {
	open?: boolean,
	setOpen?: (open: boolean) => void
}

export const NavigationContext = createContext<ThemeContextProps>({})

interface NavigationProviderProps {
	children: ReactNode
}

export const NavigationProvider: FC<NavigationProviderProps> = ({ children }) => {
	const [open, setOpen] = useState(false)

	const initialProps = useMemo(() => ({ open, setOpen }), [open])

	return (
		<NavigationContext.Provider value={initialProps}>
			{children}
		</NavigationContext.Provider>
	)
}


