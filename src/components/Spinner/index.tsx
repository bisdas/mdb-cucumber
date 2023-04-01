import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper } from './Spinner.styled'

interface ISpinnerProps {
    title: string
    children: ReactElement
}

const Spinner: FunctionComponent<ISpinnerProps> = (): ReactElement => {
    return <OuterWrapper></OuterWrapper>
}

export default Spinner
