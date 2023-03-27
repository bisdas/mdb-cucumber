import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper } from './BareComponent.styled'

interface IBareComponentProps {
    title: string
    children: ReactElement
}

const BareComponent: FunctionComponent<IBareComponentProps> = (): ReactElement => {
    return <OuterWrapper></OuterWrapper>
}

export default BareComponent
