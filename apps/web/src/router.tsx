
import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { Home } from './routes'
import { Countries } from './routes/countries'

// Define the Root Route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
})

// Define the Index Route
export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

// Define the Countries Route
export const countriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/countries',
  component: Countries,
})


// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, countriesRoute])

// Create the router instance
export const router = createRouter({ routeTree })

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
