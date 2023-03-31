import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, First, Second, Third, Stylish } from './SiteMotto.styled'

const SiteMotto: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <First>Uplift your</First>
            <Second>kitchen,</Second>
            <Third>
                with <Stylish>beautiful</Stylish> products.
            </Third>
            {/* <Fourth>products.</Fourth> */}
        </OuterWrapper>
    )
}

export default SiteMotto
