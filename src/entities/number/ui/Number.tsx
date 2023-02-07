import {FC} from "react"

import {IconType, InfoWithIcon} from "shared"
import {text} from "../constants/constants"
import icon from "shared/assets/icons/phone.svg"

interface NumberProps {
	className?: string,
	type?: IconType
}

export const Number: FC<NumberProps> = (props) => {
	const {className = "", type} = props

	return (
		<InfoWithIcon type={type} icon={icon} text={text} className={className}/>
	)
}
