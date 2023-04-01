import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, Content, PageHeader, SearchBoxWrapper, GoBackWrapper } from './SearchPage.styled'
import { ReactComponent as BackArrow } from '../../assets/icons/arrow-left.svg'
import SearchBox from '../../components/SearchBox'
import { useSearchBox } from '../../hooks/useSearchBox'
import { useRouter } from '../../router/useRouter'

const SearchPage: FunctionComponent<any> = (): ReactElement => {
    const { onChangeInput } = useSearchBox()
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
                        <SearchBox onSearch={onChangeInput} seamless={true} icon={false} />
                    </SearchBoxWrapper>
                </PageHeader>
            </Content>
        </OuterWrapper>
    )
}

export default SearchPage
