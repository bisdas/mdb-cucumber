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
import SiteTitle from '../../components/SiteTitle'
// import SiteMotto from '../../components/SiteMotto'
// import ProfileLinks from '../../components/ProfileLinks'
import FeaturedItems from '../../components/FeaturedItems'
import { ScrollableLayout } from '../../components/SharedComponents/SharedStyledComponents.styled'

const HomePage: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <Content>
                <SiteHeaderWrapper>
                    <SiteTitle />
                    {/* <ProfileLinks /> */}
                </SiteHeaderWrapper>
                {/* <SiteMottoWrapper>
                    <SiteMotto />
                </SiteMottoWrapper> */}

                <SearchBoxWrapper>
                    <SearchTitle>Find your choice</SearchTitle>
                    <SearchBox />
                </SearchBoxWrapper>

                <FeaturedItems />

                <Section title="Non-stick cookware">
                    <ScrollableLayout>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                    </ScrollableLayout>
                </Section>
                <Section title="Pots & Pans">
                    <ScrollableLayout>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                    </ScrollableLayout>
                </Section>
                <Section title="Tawa & Kadai">
                    <ScrollableLayout>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                    </ScrollableLayout>
                </Section>
                <Section title="Cutlery">
                    <ScrollableLayout>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                    </ScrollableLayout>
                </Section>
                <Section title="Glassware">
                    <ScrollableLayout>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                        <SingleProductWrapper>
                            <ProductCard />
                        </SingleProductWrapper>
                    </ScrollableLayout>
                </Section>
            </Content>
        </OuterWrapper>
    )
}

export default HomePage
