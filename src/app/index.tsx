import "./index.sass"
import {classNames} from "shared"
import {Cottages, Main} from "pages"

const App = () => (
	<div className={classNames(["app"])}>
		<Cottages/>
		<Main/>
	</div>
)

export default App
