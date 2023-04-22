/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement, useContext } from 'react'
import {
    OuterWrapper,
    Content,
    PageHeader,
    SearchBoxWrapper,
    GoBackWrapper,
} from './AboutPage.styled'
import { ReactComponent as BackArrow } from '../../assets/icons/arrow-left.svg'

import { useRouter } from '../../router/useRouter'


const SearchPage: FunctionComponent<any> = (): ReactElement => {

    const { navigateHome } = useRouter()

    const navigateToHomePage = (): void => {
        navigateHome()
    }



    return (
        <OuterWrapper>
            <Content>
                <PageHeader>
                    <GoBackWrapper>
                        <BackArrow onClick={navigateToHomePage} />
                    </GoBackWrapper>
                    <SearchBoxWrapper>
                       
                    </SearchBoxWrapper>
                </PageHeader>

                
            </Content>
        </OuterWrapper>
    )
}

export default SearchPage
