import s from "./dots.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

interface DotsProps {
    className?: string
	count: any[]
	active: number
	onClick?: (number: number) => void
}

export const Dots: FC<DotsProps> = (props) => {
	const {className = "", count, active, onClick} = props

	console.log(active)

	return (
		<div className = {classNames([s.dots, className])}>
			{count.map((value, index) =>{
				const onSelect = () => {
					if (onClick) {
						onClick(index)
					}
				}

				return (
					<div onClick={onSelect} className={classNames([s.point], {[s.active]: index === active})} key={index}/>
				)
			})}
		</div>
	)
}
