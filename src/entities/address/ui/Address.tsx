import {FC} from "react"

import {IconType, InfoWithIcon} from "shared"
import {text} from "../constants/constants"
import icon from "shared/assets/icons/point.svg"

interface AddressProps {
    className?: string
	type?: IconType
}

export const Address: FC<AddressProps> = (props) => {
	const {className = "", type} = props

	return (
		<InfoWithIcon type={type} icon={icon} text={text} className={className}/>
	)
}
