import "./index.sass"
import {classNames, useScrollToTop} from "shared"
import {Cottages, Policy, Wrapper} from "pages"
import { Route, Routes} from "react-router-dom"
import {CottagesList} from "widgets"
import {House} from "pages/house/ui/House"


const App = () => {
	useScrollToTop()

	return (
		<div className={classNames(["app"])}>
			<Routes>
				<Route path={"/"} element={
					<>
						<Cottages/>
						<CottagesList title={"Коттеджи"}/>
					</>
				}/>
				<Route path={"/cottages"} element={
					<CottagesList title={"Коттеджи"}/>
				}/>
				<Route path={"/apartments"} element={
					<CottagesList title={"Апартаменты"}/>
				}/>
				<Route path={"/policy"} element={
					<Wrapper>
						<Policy/>
					</Wrapper>
				}/>
				<Route path={"/1"} element={
					<House/>
				}/>
				<Route path={"*"} element={
					<Wrapper>
						<h1>Такая страница не найдена</h1>
					</Wrapper>
				}/>
			</Routes>
		</div>
	)
}

export default App
