import React, { useContext, type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, Content, PageHeader, SearchBoxWrapper, GoBackWrapper } from './SearchPage.styled'
import { ReactComponent as BackArrow } from '../../assets/icons/back-arrow.svg'
import SearchBox from '../../components/SearchBox'
import { AppContext } from '../../stateManagement/contexts/appContext'
import { createSetActivePageAction } from '../../stateManagement/actionCreators/appActionCreators'
import { PAGES } from '../../configuration/constants'
import useSearchBox from '../../hooks/useSearchBox'

const SearchPage: FunctionComponent<any> = (): ReactElement => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const [state, dispatch] = useContext(AppContext)
    const { onChangeSearchInput } = useSearchBox()

    const navigateToHome = (): void => {
        dispatch(createSetActivePageAction(PAGES.HOME))
    }

    return (
        <OuterWrapper>
            <Content>
                <PageHeader>
                    <GoBackWrapper>
                        <BackArrow onClick={navigateToHome} />
                    </GoBackWrapper>
                    <SearchBoxWrapper>
                        <SearchBox onSearch={onChangeSearchInput} seamLess={true} icon={false} />
                    </SearchBoxWrapper>
                </PageHeader>
            </Content>
        </OuterWrapper>
    )
}

export default SearchPage
