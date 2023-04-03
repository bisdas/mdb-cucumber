/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import {
    OuterWrapper,
    Content,
    SearchBoxWrapper,
    SearchTitle,
    SiteHeaderWrapper,
    SiteMottoWrapper,
    MenuItem,
    MenuHead,
    SubtitleOne,
    SubtitleTwo,
    ByDelishBowl,
    By,
    DelishBowl,
    Title,
    MenuHeadSection,
    MenuSection,
    MenuItemIcon,
    MenuItemTitle,
    MenuNavigateIcon,
    SocialLinkHead,
    SocialLinkExploreLineOne,
    SocialLinkExploreLineTwo,
    SocialLinkButtons,
    SocialLink,
} from './HomePage.styled'
import Section from '../../components/Section'
import SearchBox from '../../components/SearchBox'
import SiteTitle from '../../components/SiteTitle'
import SiteMotto from '../../components/SiteMotto'
import { ScrollableLayout, LoaderWrapper } from '../../components/SharedComponents/SharedStyledComponents.styled'
import { useSearchBox } from '../../hooks/useSearchBox'
import { useRouter } from '../../router/useRouter'
import useStartUp from '../../hooks/useStartUp'
import ProductsInCategory from '../../components/ProductsInCategory'
import { useCategorisedProducts } from '../../hooks/useCategorisedProducts'
import Spinner from '../../components/Spinner'
import HamburgerMenu from '../../components/HamburgerMenu'

import { ReactComponent as YouTubeIcon } from '../../assets/icons/youtube.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import { ReactComponent as ContactIcon } from '../../assets/icons/contact-us.svg'
import { ReactComponent as FeedbackIcon } from '../../assets/icons/feedback.svg'
import { ReactComponent as GoHomeIcon } from '../../assets/icons/go-home.svg'
import { ReactComponent as ArrowRightShortIcon } from '../../assets/icons/arrow-right-short.svg'

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
                <SiteHeaderWrapper>
                    <SiteTitle />

                    <HamburgerMenu>
                        <MenuHeadSection>
                            <MenuHead>
                                <Title>Cucumber</Title>
                                <SubtitleOne>Ideas for your</SubtitleOne>
                                <SubtitleTwo>kitchen.</SubtitleTwo>
                                <ByDelishBowl>
                                    <By>by</By>
                                    <DelishBowl>Delish Bowl</DelishBowl>
                                </ByDelishBowl>
                            </MenuHead>
                        </MenuHeadSection>
                        <MenuSection>
                            <MenuItem>
                                <MenuItemIcon adjustTopPosition={-1}>
                                    <GoHomeIcon height={16} width={16} />
                                </MenuItemIcon>
                                <MenuItemTitle>Delish Bowl - Home</MenuItemTitle>
                                <MenuNavigateIcon adjustTopPosition={-1}>
                                    <ArrowRightShortIcon height={12} width={12} fill="red" stroke="#fefefe" />
                                </MenuNavigateIcon>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemIcon adjustTopPosition={0}>
                                    <ContactIcon height={16} width={16} />
                                </MenuItemIcon>
                                <MenuItemTitle>Contact us</MenuItemTitle>
                                <MenuNavigateIcon adjustTopPosition={-1}>
                                    <ArrowRightShortIcon height={12} width={12} fill="red" stroke="#fefefe" />
                                </MenuNavigateIcon>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemIcon adjustTopPosition={0}>
                                    <FeedbackIcon height={16} width={16} />
                                </MenuItemIcon>
                                <MenuItemTitle>Leave us a feedback</MenuItemTitle>
                                <MenuNavigateIcon adjustTopPosition={-1}>
                                    <ArrowRightShortIcon height={12} width={12} fill="red" stroke="#fefefe" />
                                </MenuNavigateIcon>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <SocialLinkHead>
                                <SocialLinkExploreLineOne>Explore</SocialLinkExploreLineOne>
                                <SocialLinkExploreLineTwo>Delish Bowl</SocialLinkExploreLineTwo>
                                <SocialLinkButtons>
                                    <SocialLink>
                                        <InstagramIcon height={14} width={14} />
                                    </SocialLink>
                                    <SocialLink>
                                        <YouTubeIcon height={14} width={14} />
                                    </SocialLink>
                                    <SocialLink>
                                        <FacebookIcon height={14} width={14} />
                                    </SocialLink>
                                </SocialLinkButtons>
                            </SocialLinkHead>
                        </MenuSection>
                    </HamburgerMenu>
                </SiteHeaderWrapper>
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
                )}
            </Content>
        </OuterWrapper>
    )
}

export default HomePage
