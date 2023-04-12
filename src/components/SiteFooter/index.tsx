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
                        beautiful.
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTitle>Partner with us</SectionTitle>
                    <SectionBody>
                        Are you a brand, or an individual looking to expand your business? We believe that we working
                        together can help you reach a broader audience, and let your business grow faster.
                        <ContactButtonWrapper>
                            <ContactButton role="button">Send an email</ContactButton>
                        </ContactButtonWrapper>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTitle>Contact us</SectionTitle>
                    <SectionBody>Email: mydelishbowl@gmail.com</SectionBody>
                </Section>
                <Section>
                    <SectionBody>
                        <SocialLink>
                            <InstagramIcon height={14} width={14} />
                        </SocialLink>
                        <SocialLink>
                            <YouTubeIcon height={14} width={14} />
                        </SocialLink>
                        <SocialLink>
                            <FacebookIcon height={14} width={14} />
                        </SocialLink>
                    </SectionBody>
                </Section>
            </Content>
        </OuterWrapper>
    )
}

export default SiteFooter
