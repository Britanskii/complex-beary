import s from "./imagesList.module.sass"

import close from "shared/assets/icons/close.svg"

import {FC, useEffect, useState} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {LazyImage} from "shared/lazyImage/ui/LazyImage"
import {Slider, SliderVariants} from "shared/ui/slider/ui/Slider"

interface ImagesListProps {
	className?: string
	images: string[]
}

export const ImagesList: FC<ImagesListProps> = (props) => {
	const [open, setOpen] = useState(false)
	const {className = "", images} = props

	const [currentImages, setCurrentImages] = useState<string[]>([])

	useEffect(() => {
		const shiftedImages = images
		shiftedImages.shift()

		setCurrentImages(shiftedImages)
	}, [])

	const onOpen = () => {
		setOpen(true)
	}

	const onClose = () => {
		console.log("anime")
		setOpen(false)
	}

	return (
		<>
			<div className={classNames([s.imagesList, className])}>
				{currentImages.map((src) =>
					<LazyImage onClick={onOpen} className={s.image} key={src} src={src}/>
				)}
			</div>
			{open &&
				<div  onClick={onClose} className={s.slider}>
					<div onClick={(event) => event.stopPropagation()}>
						<Slider className={s.inner} variant={SliderVariants.BIG} images={images}/>
					</div>
					<img className={s.close} src={close} alt="Закрыть"/>
				</div>
			}
		</>
	)
}
