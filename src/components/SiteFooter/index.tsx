/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import {
    OuterWrapper,
    Content,
    // SocialLinkSet,
    // SocialLink,
    // Contact,
    // ContactTitle,
    // ContactLink,
    // CommunityInvite,
    // CommunityPages,
    // InviteTitle,
    Section,
    SectionTitle,
    SectionBody,
} from './SiteFooter.styled'
import { ReactComponent as YouTubeIcon } from '../../assets/icons/youtube.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'

const SiteFooter: FunctionComponent = (): ReactElement => {
    return (
        <OuterWrapper>
            <Content>
                {/* <Section>
                    <SectionBody>
                        Go to top
                    </SectionBody>
                </Section> */}
                <Section>
                    <SectionTitle>Cucumber</SectionTitle>
                    <SectionBody>
                        Cucumber recommends you the finest product ideas you can choose from to make your kitchen look
                        beautiful
                    </SectionBody>
                </Section>
                {/* <Contact>
                    <ContactTitle>Have questions?</ContactTitle>
                    <ContactLink role="button">Write to us</ContactLink>
                </Contact>
                <CommunityInvite>
                    <InviteTitle>Join the community</InviteTitle>
                    <CommunityPages>
                        <SocialLinkSet>
                            <SocialLink>
                                <InstagramIcon height={12} width={12} />
                            </SocialLink>
                            <SocialLink>
                                <YouTubeIcon height={12} width={12} />
                            </SocialLink>
                            <SocialLink>
                                <FacebookIcon height={12} width={12} />
                            </SocialLink>
                        </SocialLinkSet>
                    </CommunityPages>
                </CommunityInvite> */}
            </Content>
        </OuterWrapper>
    )
}

export default SiteFooter
