import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const hybridRoutes = ["/", "/login", "/register"];
const patientAccesibleRoutes = ["/dashboard", "/my-profile", "/appointment", "/my-appointments", "/available-doctors", "/medical-profile", "/medical-profile/edit", "/payment-history"];
const rolesRedirect = {
  doctor: `${process.env.FRONTEND_URL}/doctor/dashboard`,
  patient: `${process.env.FRONTEND_URL}/dashboard`,
  admin: `${process.env.FRONTEND_URL}/admin/dashboard`,
};

export async function middleware(req) {
  const token = await getToken({ req });
  console.log(token, "token middleware");
  const { pathname } = req.nextUrl;

  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(`${process.env.FRONTEND_URL}/login`);
  }

  //if has token
  const role = token?.role;
  if (
    (role === "admin" && pathname.startsWith("/admin")) ||
    (role === "doctor" && pathname.startsWith("/doctor")) ||
    (role === "patient" && patientAccesibleRoutes.includes(pathname))
  ) {
    return NextResponse.next();
  }

  //will redirect to their specefic role page
  if (pathname === "/" && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role]);
  }

  NextResponse.rewrite(`${process.env.FRONTEND_URL}/login`);
  return NextResponse.redirect(`${process.env.FRONTEND_URL}`);
}

export const config = {
  matcher: [
    //hybrid routes
    "/",
    "/login",
    "/register",
    //patient routes
    "/appointment",
    "/dashboard",
    "/my-profile",
    "/my-appointments",
    "/available-doctors",
    "/medical-profile",
    "/medical-profile/:page*",
    "/payment-history",
    // "/available-doctors",
    //doctor routes
    "/doctor/:page*",
    //admin routes
    "/admin/:page*",
  ],
};
