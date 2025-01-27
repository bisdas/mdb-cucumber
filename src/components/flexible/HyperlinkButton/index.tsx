import React, { type FunctionComponent, type ReactElement } from 'react';
import { OuterWrapper, Text, type HyperlinkButtonAppearance } from './HyperlinkButton.styled';

interface IHyperlinkButtonProps {
    appearance: HyperlinkButtonAppearance;
    children: string;
    href: string;
}

const HyperlinkButton: FunctionComponent<IHyperlinkButtonProps> = ({ children, appearance, href }): ReactElement => {
    return (
        <OuterWrapper appearance={appearance} role="button" href={href} target="_blank">
            <Text appearance={appearance}>{children}</Text>
        </OuterWrapper>
    );
};

export default HyperlinkButton;
