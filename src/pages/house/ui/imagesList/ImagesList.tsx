import s from "./imagesList.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

interface ImagesListProps {
    className?: string
	images: string[]
}

export const ImagesList: FC<ImagesListProps> = (props) => {
	const {className = "", images} = props

	return (
		<div className = {classNames([s.imagesList, className])}>
			{images.map((src) =>
				<img className={s.image} key={src} src={src}/>
			)}
		</div>
	)
}
