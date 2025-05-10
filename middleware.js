import { NextResponse } from 'next/server'

const validLocales = ['es', 'en']

export function middleware(request) {
  const { pathname } = request.nextUrl
  const parts = pathname.split('/')

  if (parts.length > 1) {
    const locale = parts[1]

    if (locale && !validLocales.includes(locale)) {
      const lowerLocale = locale.toLowerCase()

      if (validLocales.includes(lowerLocale)) {
        const newUrl = new URL(request.url)
        newUrl.pathname = `/${lowerLocale}${pathname.slice(locale.length + 1)}`
        return NextResponse.redirect(newUrl)
      }
    }
  }

  return NextResponse.next()
}

