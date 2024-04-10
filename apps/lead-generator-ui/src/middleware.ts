import { NextRequest, NextResponse } from 'next/server'
import { BUSINESS_SPECIFIC_DATA } from './globals'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl

  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = req.headers.get('host')


  // Prevent security issues – users should not be able to canonically access
  // the pages/sites folder and its respective contents.
  if (url.pathname.startsWith(`/_sites`)) {
    url.pathname = `/404`
  } else {
    const businesses = Object.keys(BUSINESS_SPECIFIC_DATA)
    for(var i =0; i < businesses.length; i++) {
      const business = businesses[i];
      if(business && hostname?.startsWith(business)){
          // rewrite to the tenant
          url.pathname = `/${business}${url.pathname}`;
          break;
      }
    }
  }

  return NextResponse.rewrite(url)
}