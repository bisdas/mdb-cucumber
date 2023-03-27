import React, { type FunctionComponent, type ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

interface IProps {
    children: ReactElement
}

export const Router: FunctionComponent<IProps> = ({ children }): ReactElement => {
    const browserRouterRoot = createBrowserRouter([
        {
            path: '/',
            element: children,
        },
    ])

    return <RouterProvider router={browserRouterRoot} />
}

export default Router
