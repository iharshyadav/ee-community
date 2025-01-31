// import { clerkMiddleware } from "@clerk/nextjs/server";

// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// // export default clerkMiddleware({
// //   publicRoutes: ["/"],
// // });

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     "/((?!.+\\.[\\w]+$|_next).*)",
//     "/",
//     "/(api|trpc)(.*)",
//     "/dashboard/apikeys",
//     "/dashboard",
//   ],
// };

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/signup(.*)"]);
// export default clerkMiddleware((auth, request) => {
//   if (!isPublicRoute(request)) {
//     auth().protect();
//   }
// });
// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     // "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|docx?|zip|webmanifest)).*)",
//     // // Always run for API routes
//     // "/(api|trpc)(.*)",
//     // "/((?!.+\\.[\\w]+$|_next).*)",
//     // "/",
//     // // "/(api|trpc)(.*)",
//     // "/dashboard/apikeys",
//     // "/dashboard",
//     // "/((?!.+\\.[\\w]+$|_next).*)",
//     // "/",
//     // "/(api|trpc)(.*)",
//     "/dashboard/apikeys",
//     "/dashboard",
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// Define the routes that need protection
const isProtectedRoute = createRouteMatcher([
  "/log-emissions(.*)", // Protect this route
  "/dashboard(.*)",
  "/forum(.*)",
  // "/settings/account(.*)",
  // "/settings/plans(.*)",
  "/settings(.*)",
  "/viewpage(.*)",
  "/apikeys(.*)",
  "/emission-factors(.*)",
  "/emissionsgpt(.*)",
  "/reports(.*)",
]);
export default clerkMiddleware((auth, req) => {
  // Apply protection to routes defined in `isProtectedRoute`
  if (isProtectedRoute(req)) {
    auth().protect(); // Redirect unauthenticated users
  }
});
export const config = {
  matcher: [
    // Skip Next.js internals and specific static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|zip|webmanifest)).*)",
    // Always run for API routes and other protected routes
    "/(api|trpc)(.*)",
    "/log-emissions(.*)",
  ],
};
