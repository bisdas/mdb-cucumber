import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper } from './RouteFallback.styled'

// interface IRouteFallbackProps {
//     title: string
//     children: ReactElement
// }

const RouteFallback: FunctionComponent<any> = (): ReactElement => {
    return <OuterWrapper>This route is not found</OuterWrapper>
}

export default RouteFallback
