import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import "./index.sass"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {NavigationProvider} from "shared"
import {BrowserRouter} from "react-router-dom"


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<NavigationProvider>
				<App/>
			</NavigationProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
