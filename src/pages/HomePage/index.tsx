/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, type FunctionComponent, type ReactElement } from 'react';
import {
    OuterWrapper,
    Content,
    SearchBoxWrapper,
    SearchTitle,
    SiteFooterWrapper,
    SiteMottoWrapper,
    ProductSectionsWrapper,
    GoToTopWrapper,
    GoToTopIconWrapper,
    GoToTopButton,
} from './HomePage.styled';
import Section from '../../components/Section';
import SearchBox from '../../components/SearchBox';
import SiteMotto from '../../components/SiteMotto';
import { ScrollableLayout, LoaderWrapper } from '../../components/SharedComponents/SharedStyledComponents.styled';
import { useSearchBox } from '../../hooks/useSearchBox';
import { useRouter } from '../../router/useRouter';
import useStartUp from '../../hooks/useStartUp';
import ProductsInCategory from '../../components/ProductsInCategory';
import { useCategorisedProducts } from '../../hooks/useCategorisedProducts';
import Spinner from '../../components/Spinner';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import { ReactComponent as GoToTopIcon } from '../../assets/icons/go-to-top.svg';
import { showUnderDevelopmentBanner } from '../../utils/utils';
import { MessageText } from '../../configuration/constants';
import Banner from '../../components/Banner';
import { MetricType, sendMetrics } from '../../utils/analyticsUtils';

const HomePage: FunctionComponent<any> = (): ReactElement => {
    useStartUp();
    const { navigateSearch } = useRouter();
    const { onChange } = useSearchBox();
    const [categorisedItemsData, categorisedItemsErrors, categorisedItemsLoading] = useCategorisedProducts();

    const navigateToSearchPage = (): void => {
        navigateSearch();
    };

    useEffect(() => {
        sendMetrics(MetricType.visitSite);
    }, []);

    return (
        <OuterWrapper>
            {showUnderDevelopmentBanner() && <Banner text={MessageText.UnderDevelopment} />}
            <Content>
                <SiteHeader />
                <SiteMottoWrapper>
                    <SiteMotto />
                </SiteMottoWrapper>
                <SearchBoxWrapper>
                    <SearchTitle>What are you looking for?</SearchTitle>
                    <SearchBox onSearch={onChange} onFocus={navigateToSearchPage} />
                </SearchBoxWrapper>

                {categorisedItemsLoading === true ? (
                    <LoaderWrapper>
                        <Spinner />
                    </LoaderWrapper>
                ) : (
                    <>
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
                        <GoToTopWrapper>
                            <GoToTopButton
                                onClick={() => {
                                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                                }}
                            >
                                <GoToTopIconWrapper>
                                    <GoToTopIcon width={28} height={28} />
                                </GoToTopIconWrapper>
                                Go to top
                            </GoToTopButton>
                        </GoToTopWrapper>
                    </>
                )}

                <SiteFooterWrapper>
                    <SiteFooter />
                </SiteFooterWrapper>
            </Content>
        </OuterWrapper>
    );
};

export default HomePage;
