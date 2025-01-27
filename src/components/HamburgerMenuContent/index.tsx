/* eslint-disable no-debugger */
import React, { type FunctionComponent, type ReactElement } from 'react';
import SiteTitle from '../SiteTitle';
import {
    OuterWrapper,
    MenuItem,
    MenuHead,
    HeadSection,
    MenuItemsSection,
    CommunityInviteSection,
    MenuItemIcon,
    MenuItemTitle,
    MenuNavigateIcon,
    SocialLinkButtons,
    SocialLink,
    CommunityInvite,
    TheCommunity,
} from './HamburgerMenuContent.styled';
import { ReactComponent as YouTubeIcon } from '../../assets/icons/youtube.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as ContactIcon } from '../../assets/icons/contact-us.svg';
import { ReactComponent as FeedbackIcon } from '../../assets/icons/feedback.svg';
// import { ReactComponent as GoHomeIcon } from '../../assets/icons/go-home.svg'
import { ReactComponent as InfoIcon } from '../../assets/icons/ticket-information.svg';
import { ReactComponent as ArrowRightShortIcon } from '../../assets/icons/arrow-right-short.svg';

import { useRouter } from '../../router/useRouter';
import {
    DELISH_BOWL_INSTAGRAM_LINK,
    DELISH_BOWL_YOUTUBE_LINK,
    DELISH_BOWL_FACEBOOK_LINK,
    CUCUMBER_FEEDBACK_EMAIL_SUBJECT,
    CUCUMBER_CONTACT_EMAIL_SUBJECT,
    // DELISH_BOWL_AMAZON_INFLUENCER_SHOP_LINK,
} from '../../configuration/constants';
import { openEmailWriterWindow, openAnyLinkWindow } from '../../utils/utils';

interface IHamburgerMenuContent {
    onCloseMenu?: any;
}

const HamburgerMenuContent: FunctionComponent<IHamburgerMenuContent> = ({ onCloseMenu }): ReactElement => {
    const { navigateAbout } = useRouter();

    // todo: move menu item to a component
    return (
        <OuterWrapper>
            <HeadSection>
                <MenuHead>
                    <SiteTitle />
                </MenuHead>
            </HeadSection>
            <MenuItemsSection>
                <MenuItem
                    onClick={() => {
                        // todo: revisit this. check why about page is not scrollable when not nvaigated with the delay
                        onCloseMenu();
                        setTimeout(() => {
                            navigateAbout();
                        }, 350);
                    }}
                >
                    <MenuItemIcon adjustTopPosition={0}>
                        <InfoIcon height={16} width={16} />
                    </MenuItemIcon>
                    <MenuItemTitle border={true}>About Cucumber</MenuItemTitle>
                    <MenuNavigateIcon adjustTopPosition={-1}>
                        <ArrowRightShortIcon height={12} width={12} fill="red" stroke="#fefefe" />
                    </MenuNavigateIcon>
                </MenuItem>
                {/* <MenuItem>
                    <MenuItemIcon adjustTopPosition={0}>
                        <InfoIcon height={16} width={16} />
                    </MenuItemIcon>
                    <MenuItemTitle border={true}>
                        <a
                            style={{ textDecoration: 'none', color: '#000000' }}
                            href={DELISH_BOWL_AMAZON_INFLUENCER_SHOP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Our Amazon Shop
                        </a>
                    </MenuItemTitle>
                    <MenuNavigateIcon adjustTopPosition={-1}>
                        <a
                            style={{ textDecoration: 'none', color: '#000000' }}
                            href={DELISH_BOWL_AMAZON_INFLUENCER_SHOP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ArrowRightShortIcon height={12} width={12} fill="red" stroke="#fefefe" />
                        </a>
                    </MenuNavigateIcon>
                </MenuItem> */}
                <MenuItem
                    onClick={() => {
                        openEmailWriterWindow(CUCUMBER_CONTACT_EMAIL_SUBJECT);
                    }}
                >
                    <MenuItemIcon adjustTopPosition={1}>
                        <ContactIcon height={16} width={16} />
                    </MenuItemIcon>
                    <MenuItemTitle border={true}>Contact us</MenuItemTitle>
                    <MenuNavigateIcon adjustTopPosition={-1}>
                        <ArrowRightShortIcon height={12} width={12} fill="red" stroke="#fefefe" />
                    </MenuNavigateIcon>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        openEmailWriterWindow(CUCUMBER_FEEDBACK_EMAIL_SUBJECT);
                    }}
                >
                    <MenuItemIcon adjustTopPosition={1}>
                        <FeedbackIcon height={16} width={16} />
                    </MenuItemIcon>
                    <MenuItemTitle border={false}>Leave us a feedback</MenuItemTitle>
                    <MenuNavigateIcon adjustTopPosition={-1}>
                        <ArrowRightShortIcon height={12} width={12} fill="red" stroke="#fefefe" />
                    </MenuNavigateIcon>
                </MenuItem>
            </MenuItemsSection>
            <CommunityInviteSection>
                <CommunityInvite>
                    <TheCommunity>Join the community</TheCommunity>
                </CommunityInvite>
                <SocialLinkButtons>
                    <SocialLink
                        onClick={() => {
                            openAnyLinkWindow(DELISH_BOWL_INSTAGRAM_LINK);
                        }}
                    >
                        <InstagramIcon height={14} width={14} />
                    </SocialLink>
                    <SocialLink
                        onClick={() => {
                            openAnyLinkWindow(DELISH_BOWL_YOUTUBE_LINK);
                        }}
                    >
                        <YouTubeIcon height={14} width={14} />
                    </SocialLink>
                    <SocialLink
                        onClick={() => {
                            openAnyLinkWindow(DELISH_BOWL_FACEBOOK_LINK);
                        }}
                    >
                        <FacebookIcon height={14} width={14} />
                    </SocialLink>
                </SocialLinkButtons>
            </CommunityInviteSection>
        </OuterWrapper>
    );
};

export default HamburgerMenuContent;
