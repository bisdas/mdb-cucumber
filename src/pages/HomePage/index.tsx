/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import {
    OuterWrapper,
    Content,
    SingleProductWrapper,
    SearchBoxWrapper,
    SearchTitle,
    SiteHeaderWrapper,
    // SiteMottoWrapper,
} from './HomePage.styled'
import Section from '../../components/Section'
import ProductCard from '../../components/ProductCard'
import SearchBox from '../../components/SearchBox'
// import SiteTitle from '../../components/SiteTitle'
// import SiteMotto from '../../components/SiteMotto'
// import ProfileLinks from '../../components/ProfileLinks'
import { ScrollableLayout } from '../../components/SharedComponents/SharedStyledComponents.styled'
import useSearchBox from '../../hooks/useSearchBox'
import { useRouter } from '../../router/useRouter'
import useStartUp from '../../hooks/useStartUp'
import ProductsInCategory from '../../components/ProductsInCategory'

const HomePage: FunctionComponent<any> = (): ReactElement => {
    const { navigateSearch } = useRouter()
    const { onChange } = useSearchBox()
    useStartUp()

    const navigateToSearchPage = (): void => {
        navigateSearch()
    }

    return (
        <OuterWrapper>
            <Content>
                <SiteHeaderWrapper>
                    {/* <SiteTitle /> */}
                    {/* <ProfileLinks /> */}
                </SiteHeaderWrapper>
                {/* <SiteMottoWrapper>
                    <SiteMotto />
                </SiteMottoWrapper> */}

                <SearchBoxWrapper>
                    <SearchTitle>Find your choice</SearchTitle>
                    <SearchBox onSearch={onChange} onFocus={navigateToSearchPage} />
                </SearchBoxWrapper>

                <Section title="Non-stick cookware">
                    <ScrollableLayout>
                        <div></div>
                    </ScrollableLayout>
                </Section>
                <Section title="Pots & Pans">
                    <div></div>
                </Section>
                <Section title="Tawa & Kadai">
                    <div></div>
                </Section>
                <Section title="Cutlery">
                    <div></div>
                </Section>
                <Section title="Glassware">
                    <div></div>
                </Section>
            </Content>
        </OuterWrapper>
    )
}

export default HomePage
