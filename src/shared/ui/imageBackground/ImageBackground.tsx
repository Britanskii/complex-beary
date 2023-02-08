import s from "./imageBackground.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

interface ImageBackgroundProps {
	images: string[]
	active: number
	className?: string
}

export const ImageBackground: FC<ImageBackgroundProps> = (props) => {
	const {className = "", images, active} = props

	return (
		<div className={classNames([s.imageBackground, className])}>
			<div className={s.darker}/>
			{images.map((image, index) =>
				<img key={image}
					className={classNames([s.img ], {[s.active]: active === index})}
					src={image}/>
			)}
		</div>
	)
}
