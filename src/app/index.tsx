import "./index.sass"
import {classNames} from "shared"
import {Cottages} from "pages"

const App = () => (
	<div className={classNames(["app"])}>
		<Cottages/>
	</div>
)

export default App
