// !Processes localisation path names during node generation page/post process.

export const processPath = (path: string, _locale: string, type = `page`) => {
	const defaultLang = `en`
	const locale = _locale.toLowerCase()

	switch (type) {
		case `page`:
			return locale === defaultLang ? `/${path}` : `/${locale}/${path}`

		case `news`:
			return locale === defaultLang ? `/news/${path}` : `/news/${locale}/${path}`

		default:
			return `/${locale}/${path}`
	}
}
