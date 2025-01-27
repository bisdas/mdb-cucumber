/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement } from 'react';
import { Button } from '../../components/flexible';
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
    ButtonWrapper,
} from './AboutPage.styled';
import { ReactComponent as BackArrow } from '../../assets/icons/arrow-left.svg';
import { DELISH_BOWL_INSTAGRAM_LINK, CUCUMBER_SHARE_IDEA_EMAIL_SUBJECT } from '../../configuration/constants';
import { useRouter } from '../../router/useRouter';
import { ReactComponent as ThinkingAvatar } from '../../assets/icons/avatar-thinking.svg';
import { openEmailWriterWindow } from '../../utils/utils';

const AboutPage: FunctionComponent<any> = (): ReactElement => {
    const { navigateBack } = useRouter();

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
                        Cucumber brings you ideas for organising and uplifing your home & kitchen. Here you can find
                        products for your daily needs in the kitchen, or maybe something beautiful you&apos;re looking
                        out for decorating your sweet home.
                    </ParagraphText>
                    <ParagraphText>
                        First thing - let&apos;s be honest. Finding the right product for your need is a tough job.
                        It&apos;s tiresome and time consuming.
                    </ParagraphText>
                    <ParagraphText>
                        Cucumber is the idea and recommendation store at{' '}
                        <Link href={DELISH_BOWL_INSTAGRAM_LINK} target="_blank">
                            Delish Bowl
                        </Link>
                        . We are frequently asked about the products we use for preparing the recipes. So here we are -
                        sharing some that you could choose for your own kitchen. We choose the items best in quality and
                        design and also budget friendly.
                    </ParagraphText>

                    {/* <ParagraphTitle>How this works?</ParagraphTitle>
                    <ParagraphText>
                        We use Amazon Affiliate Partnership to allow you buy the products directly from Amazon.{' '}
                        <b>
                            You don&apos;t pay anything extra for any item. You pay what you normally pay on Amazon for
                            the product you are buying.
                        </b>{' '}
                        Sounds good, right?
                    </ParagraphText> */}

                    <ParagraphTitle>Sounds good, right?</ParagraphTitle>
                    <ParagraphText>
                        So, as said, we choose the best products for you, so you can take some rest :) So why not
                        explore the site around and find something you need :)
                    </ParagraphText>
                    <ParagraphTitle>Share your idea</ParagraphTitle>
                    <ParagraphText>
                        Do you see something you&apos;re looking for is not on Cucumber, or maybe you have some idea.
                        Let us know, your feedback is always welcome.
                        <ButtonWrapper>
                            <Button
                                appearance="outlined"
                                onClick={() => {
                                    openEmailWriterWindow(CUCUMBER_SHARE_IDEA_EMAIL_SUBJECT);
                                }}
                            >
                                Share with us
                            </Button>
                        </ButtonWrapper>
                    </ParagraphText>
                    <ParagraphText></ParagraphText>
                </PageContent>
            </Content>
        </OuterWrapper>
    );
};

export default AboutPage;
