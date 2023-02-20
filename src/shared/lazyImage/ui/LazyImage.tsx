import {FC, ImgHTMLAttributes} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {LazyLoadImage} from "react-lazy-load-image-component"

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string
	src: string
}

export const LazyImage: FC<LazyImageProps> = (props) => {
	const {className = "", src} = props

	return (
		<div {...props} className={classNames([className])}>
			<LazyLoadImage width="100%" height="auto" src={src} />
		</div>
	)
}
