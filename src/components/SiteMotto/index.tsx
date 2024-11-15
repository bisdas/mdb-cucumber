import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, First, Third, Fourth, Stylish, HowItWorks } from './SiteMotto.styled'
import { useRouter } from '../../router/useRouter'

const SiteMotto: FunctionComponent<any> = (): ReactElement => {
    const { navigateAbout } = useRouter()
    return (
        <OuterWrapper>
            <First>Uplift your kitchen.</First>
            <Third>
                Many <Stylish>beautiful</Stylish> ideas
            </Third>
            <Fourth>to choose from.</Fourth>

            <HowItWorks onClick={navigateAbout}>Learn how this works</HowItWorks>
        </OuterWrapper>
    )
}

export default SiteMotto
