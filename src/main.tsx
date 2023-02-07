import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import "./index.sass"
import {NavigationProvider} from "shared"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<NavigationProvider>
			<App/>
		</NavigationProvider>
	</React.StrictMode>,
)
