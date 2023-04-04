import React, { type FunctionComponent, type ReactElement } from 'react'
import {
    OuterWrapper,
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
    SocialLinkButtons,
    SocialLink,
} from './SideMenuContent.styled'
import { ReactComponent as YouTubeIcon } from '../../assets/icons/youtube.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import { ReactComponent as ContactIcon } from '../../assets/icons/contact-us.svg'
import { ReactComponent as FeedbackIcon } from '../../assets/icons/feedback.svg'
import { ReactComponent as GoHomeIcon } from '../../assets/icons/go-home.svg'
import { ReactComponent as ArrowRightShortIcon } from '../../assets/icons/arrow-right-short.svg'

const SideMenuContent: FunctionComponent = (): ReactElement => {
    return (
        <OuterWrapper>
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
                    <MenuItemIcon adjustTopPosition={0}>
                        <GoHomeIcon height={16} width={16} />
                    </MenuItemIcon>
                    <MenuItemTitle>Delish Bowl - Home</MenuItemTitle>
                    <MenuNavigateIcon adjustTopPosition={-1}>
                        <ArrowRightShortIcon height={12} width={12} fill="red" stroke="#fefefe" />
                    </MenuNavigateIcon>
                </MenuItem>
                <MenuItem>
                    <MenuItemIcon adjustTopPosition={1}>
                        <ContactIcon height={16} width={16} />
                    </MenuItemIcon>
                    <MenuItemTitle>Contact us</MenuItemTitle>
                    <MenuNavigateIcon adjustTopPosition={-1}>
                        <ArrowRightShortIcon height={12} width={12} fill="red" stroke="#fefefe" />
                    </MenuNavigateIcon>
                </MenuItem>
                <MenuItem>
                    <MenuItemIcon adjustTopPosition={1}>
                        <FeedbackIcon height={16} width={16} />
                    </MenuItemIcon>
                    <MenuItemTitle>Leave us a feedback</MenuItemTitle>
                    <MenuNavigateIcon adjustTopPosition={-1}>
                        <ArrowRightShortIcon height={12} width={12} fill="red" stroke="#fefefe" />
                    </MenuNavigateIcon>
                </MenuItem>
            </MenuSection>
            <MenuSection>
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
            </MenuSection>
        </OuterWrapper>
    )
}

export default SideMenuContent
