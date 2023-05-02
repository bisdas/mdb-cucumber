/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement, useContext } from 'react'
import {
    OuterWrapper,
    Content,
    PageHeader,
    PageContent,
    SearchBoxWrapper,
    GoBackWrapper,
    LoaderWrapper,
    Description,
    DescriptionFirstLine,
    DescriptionSecondLine,
    ProductGridWrapper,
} from './SearchPage.styled'
import { ReactComponent as BackArrow } from '../../assets/icons/arrow-left.svg'
import SearchBox from '../../components/SearchBox'
import { useSearchBox } from '../../hooks/useSearchBox'
import { useRouter } from '../../router/useRouter'
import { StoreContext } from '../../stateManagement/storeState'
import ProductsGrid from '../../components/ProductsGrid'
import Spinner from '../../components/Spinner'

const SearchPage: FunctionComponent<any> = (): ReactElement => {
    const [storeData] = useContext(StoreContext)
    const { onChangeInput } = useSearchBox()
    const { navigateHome } = useRouter()

    const navigateToHomePage = (): void => {
        navigateHome()
    }

    const { filteredProducts } = storeData

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

                {filteredProducts?.isLoading === true ? (
                    <LoaderWrapper>
                        <Spinner />
                    </LoaderWrapper>
                ) : (
                    <PageContent>
                        {filteredProducts?.data?.length !== 0 && (
                            <Description>
                                <DescriptionFirstLine>{filteredProducts?.data.length} items</DescriptionFirstLine>
                                <DescriptionSecondLine>matched your search</DescriptionSecondLine>
                            </Description>
                        )}

                        <ProductGridWrapper>
                            <ProductsGrid products={filteredProducts?.data} numberOfColumns={2} />
                        </ProductGridWrapper>
                    </PageContent>
                )}
            </Content>
        </OuterWrapper>
    )
}

export default SearchPage
