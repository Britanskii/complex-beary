import "./index.sass"
import {classNames, COTTAGES, useScrollToTop} from "shared"
import {Cottages, Policy, Wrapper} from "pages"
import {Route, Routes} from "react-router-dom"
import {CottagesList} from "widgets"
import {House} from "pages/house/ui/House"
import {ApartmentType} from "entities/apartment/ui/Apartment"
import {Promotions} from "pages/promotions/ui/Promotions"
import {Leisure} from "pages/leisure/ui/Leisure"


const App = () => {
	useScrollToTop()

	const cottages = COTTAGES.filter(({type}) => type !== ApartmentType.APARTMENT)
	const apartments = COTTAGES.filter(({type}) => type !== ApartmentType.COTTAGE)

	return (
		<div className={classNames(["app"])}>
			<Routes>
				<Route path={"/"} element={
					<>
						<Cottages/>
						<CottagesList type={ApartmentType.COTTAGE} list={COTTAGES} title={"Коттеджи"}/>
					</>
				}/>
				<Route path={"/cottages"} element={
					<CottagesList type={ApartmentType.COTTAGE} list={cottages} title={"Коттеджи"}/>
				}/>
				<Route path={"/apartments"} element={
					<CottagesList type={ApartmentType.APARTMENT} list={apartments} title={"Апартаменты"}/>
				}/>
				<Route path={"/policy"} element={
					<Policy/>
				}/>
				<Route path={"/cottages/:id"} element={
					<House/>
				}/>
				<Route path={"/apartments/:id"} element={
					<House/>
				}/>
				<Route path={"/promotions"} element={
					<Promotions/>
				}>
				</Route>
				<Route path={"/promotions/leisure"} element={
					<Leisure/>
				}>
				</Route>
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
