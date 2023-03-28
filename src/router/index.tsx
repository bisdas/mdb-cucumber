import React, { type FunctionComponent, type ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouteFallback from '../components/RouteFallback'
import HomePage from '../pages/HomePage'
import CategoryPage from '../pages/CategoryPage'
import SearchPage from '../pages/SearchPage'

export const ROUTES = {
    CATEGORY: 'category/:id',
    SEARCH: 'search',
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
])

const RouteMap: FunctionComponent<any> = (): ReactElement => {
    return <RouterProvider router={browserRouter} />
}

export default RouteMap
