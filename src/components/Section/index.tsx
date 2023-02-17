import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, ContentWrapper, TitleWrapper, TitleText } from './Section.styled'

interface SectionProps {
    title: string
    children: ReactElement
}

const Section: FunctionComponent<SectionProps> = ({ children, title }): ReactElement => {
    return (
        <OuterWrapper>
            <TitleWrapper>
                <TitleText>{title}</TitleText>
            </TitleWrapper>
            <ContentWrapper>{children}</ContentWrapper>
        </OuterWrapper>
    )
}

export default Section
