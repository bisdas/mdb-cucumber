import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, First, Second } from './DBStoreFront.styled'

const DBStoreFront: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <First>DELISH BOWL</First>
            <Second>STOREFRONT</Second>
        </OuterWrapper>
    )
}

export default DBStoreFront
