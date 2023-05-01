/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import {
    OuterWrapper,
    Content,
    Section,
    SectionTitle,
    SectionBody,
    ContactButtonWrapper,
    ContactButton,
    SocialLink,
} from './SiteFooter.styled'
import { ReactComponent as YouTubeIcon } from '../../assets/icons/youtube.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import {
    DELISH_BOWL_INSTAGRAM_LINK,
    DELISH_BOWL_YOUTUBE_LINK,
    DELISH_BOWL_FACEBOOK_LINK,
    DELISH_BOWL_EMAIL_ADDRESS,
    CUCUMBER_COLLABORATION_EMAIL_SUBJECT,
} from '../../configuration/constants'
import { openEmailWriterWindow, openAnyLinkWindow } from '../../utils/utils'

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
                        Cucumber recommends you product ideas you can choose from to make your kitchen look beautiful.
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTitle>Partner with us</SectionTitle>
                    <SectionBody>
                        <div>Are you a brand, or an individual looking to expand your business?</div>
                        <p>
                            We believe that we working together can help you reach a broader audience, and let your
                            business grow faster.
                        </p>
                        <ContactButtonWrapper>
                            <ContactButton
                                onClick={() => {
                                    openEmailWriterWindow(CUCUMBER_COLLABORATION_EMAIL_SUBJECT)
                                }}
                                role="button"
                            >
                                Send an email
                            </ContactButton>
                        </ContactButtonWrapper>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTitle>Contact us</SectionTitle>
                    <SectionBody>Email: {DELISH_BOWL_EMAIL_ADDRESS.toLowerCase()}</SectionBody>
                </Section>
                <Section>
                    <SectionBody>
                        <SocialLink
                            onClick={() => {
                                openAnyLinkWindow(DELISH_BOWL_INSTAGRAM_LINK)
                            }}
                        >
                            <InstagramIcon height={14} width={14} />
                        </SocialLink>
                        <SocialLink
                            onClick={() => {
                                openAnyLinkWindow(DELISH_BOWL_YOUTUBE_LINK)
                            }}
                        >
                            <YouTubeIcon height={14} width={14} />
                        </SocialLink>
                        <SocialLink
                            onClick={() => {
                                openAnyLinkWindow(DELISH_BOWL_FACEBOOK_LINK)
                            }}
                        >
                            <FacebookIcon height={14} width={14} />
                        </SocialLink>
                    </SectionBody>
                </Section>
            </Content>
        </OuterWrapper>
    )
}

export default SiteFooter
