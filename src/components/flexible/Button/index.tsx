import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, Text, type ButtonAppearance } from './Button.styled'

interface IButtonProps {
    appearance: ButtonAppearance
    onClick: any
    children: string
}

const Button: FunctionComponent<IButtonProps> = ({ children, appearance, onClick }): ReactElement => {
    return (
        <OuterWrapper appearance={appearance} role="button" onClick={onClick}>
            <Text appearance={appearance}>{children}</Text>
        </OuterWrapper>
    )
}

export default Button
