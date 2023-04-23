/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react'
import {
    OuterWrapper,
    Content,
    PageHeader,
    GoBackWrapper,
    PageContent,
    ParagraphTitle,
    Avatar,
    Link,
    ParagraphText,
    ShareButton,
} from './AboutPage.styled'
import { ReactComponent as BackArrow } from '../../assets/icons/arrow-left.svg'
import { DELISH_BOWL_INSTAGRAM_LINK, CUCUMBER_SHARE_IDEA_EMAIL_SUBJECT } from '../../configuration/constants'
import { useRouter } from '../../router/useRouter'
import { ReactComponent as ThinkingAvatar } from '../../assets/icons/avatar-thinking.svg'
import { openEmailWriterWindow } from '../../utils/utils'

const AboutPage: FunctionComponent<any> = (): ReactElement => {
    const { navigateBack } = useRouter()

    return (
        <OuterWrapper>
            <Content>
                <PageHeader>
                    <GoBackWrapper>
                        <BackArrow onClick={navigateBack} />
                    </GoBackWrapper>
                </PageHeader>
                <PageContent>
                    <Avatar>
                        <ThinkingAvatar height={200} width={200} />
                    </Avatar>
                    <ParagraphTitle>Hello, wondering what&apos;s this about?</ParagraphTitle>
                    <ParagraphText>
                        Cucumber brings you ideas for organising, uplifing and decorating your kitchen. Here, you can
                        find products for your daily needs in the kitchen, or maybe something beautiful you&apos;re
                        looking for.
                    </ParagraphText>
                    <ParagraphText>
                        Cucumber is the idea and recommendation store at{' '}
                        <Link href={DELISH_BOWL_INSTAGRAM_LINK} target="_blank">
                            Delish Bowl
                        </Link>
                        . At Delish Bowl, we are frequently asked about the products we use for preparing the recipes.
                        So here we are - sharing some ideas that you could choose from for your own kitchen.
                    </ParagraphText>

                    <ParagraphTitle>How this works?</ParagraphTitle>
                    <ParagraphText>
                        We use Amazon Affiliate Partnership to allow you buy the products directly from Amazon, without
                        any sort of extra charges. You pay normally what you pay on Amazon for a particular product.
                    </ParagraphText>

                    <ParagraphTitle>Share your idea</ParagraphTitle>
                    <ParagraphText>
                        Do you think of having a great product we can list on Cucumber?
                        <div>
                            <ShareButton
                                onClick={() => {
                                    openEmailWriterWindow(CUCUMBER_SHARE_IDEA_EMAIL_SUBJECT)
                                }}
                                role="button"
                            >
                                Share with us
                            </ShareButton>
                        </div>
                    </ParagraphText>
                    <ParagraphText></ParagraphText>
                </PageContent>
            </Content>
        </OuterWrapper>
    )
}

export default AboutPage
