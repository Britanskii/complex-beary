import React from "react"
import "./searchForm.css"

export const SearchForm = () => {

	const loadSearchForm = (w: any) => {
		const q = [
			["setContext", "TL-INT-medvegka_2023-02-16", "ru"],
			["embed", "search-form", {
				container: "tl-search-form"
			}]
		]
		const h=["ru-ibe.tlintegration.ru","ibe.tlintegration.ru","ibe.tlintegration.com"]
		const t = w.travelline = (w.travelline || {}),
			ti = t.integration = (t.integration || {})
		ti.__cq = ti.__cq ? ti.__cq.concat(q) : q
		if (!ti.__loader) {
			ti.__loader = true
			const d = w.document, c = d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]

			function e(s: any, f: any) {
				return function () {
					w.TL || (() => {
						c.removeChild(s)
						f()
					})()
				}
			}

			(function l(h) {
				if (0 === h.length) return
				const s = d.createElement("script")
				s.type = "text/javascript"
				s.async = !0
				s.src = "https://" + h[0] + "/integration/loader.js"
				s.onerror = s.onload = e(s, function () {
					l(h.slice(1, h.length))
				})
				c.appendChild(s)
			})(h)
		}
	}

	React.useEffect(() => {
		loadSearchForm(window)
	}, [])

	return (
		<div id='block-search'>
			<div id='tl-search-form' className='tl-container'></div>
		</div>
	)
}
