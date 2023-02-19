import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, First, Second } from './SiteMotto.styled'

const SiteMotto: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <First>Recommending you products.</First>
            <Second>That you&apos;ll love!</Second>
        </OuterWrapper>
    )
}

export default SiteMotto
