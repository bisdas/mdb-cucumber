import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, HelloText, ThereText } from './Greetings.styled'

const Greetings: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <HelloText>hello</HelloText>
            <ThereText>there</ThereText>
        </OuterWrapper>
    )
}

export default Greetings
