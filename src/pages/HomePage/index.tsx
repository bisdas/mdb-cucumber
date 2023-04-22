/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import {
    OuterWrapper,
    Content,
    SearchBoxWrapper,
    SearchTitle,
    SiteFooterWrapper,
    SiteMottoWrapper,
    ProductSectionsWrapper,
} from './HomePage.styled'
import Section from '../../components/Section'
import SearchBox from '../../components/SearchBox'
import SiteMotto from '../../components/SiteMotto'
import { ScrollableLayout, LoaderWrapper } from '../../components/SharedComponents/SharedStyledComponents.styled'
import { useSearchBox } from '../../hooks/useSearchBox'
import { useRouter } from '../../router/useRouter'
import useStartUp from '../../hooks/useStartUp'
import ProductsInCategory from '../../components/ProductsInCategory'
import { useCategorisedProducts } from '../../hooks/useCategorisedProducts'
import Spinner from '../../components/Spinner'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'

const HomePage: FunctionComponent<any> = (): ReactElement => {
    useStartUp()
    const { navigateSearch } = useRouter()
    const { onChange } = useSearchBox()
    const [categorisedItemsData, categorisedItemsErrors, categorisedItemsLoading] = useCategorisedProducts()

    const navigateToSearchPage = (): void => {
        navigateSearch()
    }

    return (
        <OuterWrapper>
            <Content>
                <SiteHeader />

                <SiteMottoWrapper>
                    <SiteMotto />
                </SiteMottoWrapper>
                <SearchBoxWrapper>
                    <SearchTitle>Find your choice</SearchTitle>
                    <SearchBox onSearch={onChange} onFocus={navigateToSearchPage} />
                </SearchBoxWrapper>

                {categorisedItemsLoading === true ? (
                    <LoaderWrapper>
                        <Spinner />
                    </LoaderWrapper>
                ) : (
                    <ProductSectionsWrapper>
                        <>
                            {categorisedItemsData.map((item: any) => (
                                <Section title={item.category.title} key={item.category.id}>
                                    <ScrollableLayout>
                                        <ProductsInCategory
                                            category={item.category}
                                            products={item.products}
                                            showAll={false}
                                        />
                                    </ScrollableLayout>
                                </Section>
                            ))}
                        </>
                    </ProductSectionsWrapper>
                )}
                <SiteFooterWrapper>
                    <SiteFooter />
                </SiteFooterWrapper>
            </Content>
        </OuterWrapper>
    )
}

export default HomePage
