import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, NavItem } from './TopNavigation.styled'

const TopNavigation: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <NavItem>MICROBLOG</NavItem>
            <NavItem>LINKEDIN</NavItem>
            <NavItem>GITHUB</NavItem>
        </OuterWrapper>
    )
}

export default TopNavigation
