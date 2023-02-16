import s from "./dropdown.module.sass"

import {FC, useState} from "react"

import {classNames} from "shared/lib/classNames/classNames"

interface DropdownProps {
    className?: string
	title: string
	description: string
}

export const Dropdown: FC<DropdownProps> = ({className = "", title, description}) => {
	const [open, setOpen] = useState(false)

	const onToggle = () => {
		setOpen(open => !open)
	}

	return (
		<div onClick={onToggle} className = {classNames([s.dropdown, className], {[s.open]: open})}>
			<div className={s.title}>
				{title}
				<div className={s.toggle}/>
			</div>
			<div onClick={(event) => event.stopPropagation()} className={s.description}>
				{description}
			</div>
		</div>
	)
}
