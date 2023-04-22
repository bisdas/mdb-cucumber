import React, { type FunctionComponent, type ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouteFallback from '../components/RouteFallback'
import HomePage from '../pages/HomePage'
import CategoryPage from '../pages/CategoryPage'
import SearchPage from '../pages/SearchPage'
import AboutPage from '../pages/AboutPage'

export const ROUTES = {
    CATEGORY: 'category/:id',
    SEARCH: 'search',
    ABOUT: 'about',
    HOME: '/',
}

const browserRouter = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <HomePage />,
        errorElement: <RouteFallback />,
    },
    {
        path: ROUTES.CATEGORY,
        element: <CategoryPage />,
    },
    {
        path: ROUTES.SEARCH,
        element: <SearchPage />,
    },
    {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
    },
])

const RouteMap: FunctionComponent<any> = (): ReactElement => {
    return <RouterProvider router={browserRouter} />
}

export default RouteMap
