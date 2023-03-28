import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, Content, PageHeader, GoBackWrapper } from './SearchPage.styled'
import { ReactComponent as BackArrow } from '../../assets/icons/back-arrow.svg'
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
                </PageHeader>
            </Content>
        </OuterWrapper>
    )
}

export default SearchPage
