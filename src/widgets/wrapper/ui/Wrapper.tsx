import s from "./wrapper.module.sass"

import {FC, ReactNode} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Footer, HeaderTop} from "entities"
import {HeaderType} from "entities/headerTop/HeaderTop"
import {Menu} from "./menu/Menu"
import {Breadcrumps} from "widgets/wrapper/ui/breadcrumps/Breadcrumps"
import {SearchForm} from "entities/tlForms/tlFormInner/searchForm"

interface MainProps {
    className?: string
	children: ReactNode
}

export const Wrapper: FC<MainProps> = (props) => {
	const {className = "", children} = props

	return (
		<>
			<Menu/>
			<div className = {classNames([s.wrapper])}>
				<HeaderTop type={HeaderType.DARK}/>
				<div className={s.filter}>
					<SearchForm/>
				</div>
				<Breadcrumps/>
				<main className={className}>
					{children}
				</main>
			</div>
			<Footer/>
		</>
	)
}
