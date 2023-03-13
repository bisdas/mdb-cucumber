import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, Content } from './SearchPage.styled'

// interface BareComponentProps {

// }
const BareComponent: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <Content></Content>
        </OuterWrapper>
    )
}

export default BareComponent
