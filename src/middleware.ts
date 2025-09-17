import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get("token")?.value

  // Redirecionar raiz `/`
  if (pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/home", req.url))
    } else {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }

  // Bloquear rotas privadas
  if (!token && pathname.startsWith("/(private)")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/",
    "/(private/:path*)",
  ],
}
