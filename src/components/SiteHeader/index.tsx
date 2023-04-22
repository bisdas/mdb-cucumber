import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper } from './SiteHeader.styled'
import SiteTitle from '../../components/SiteTitle'
import HamburgerMenu from '../../components/HamburgerMenu'
import HamburgerMenuContent from '../../components/HamburgerMenuContent'

const SiteHeader: FunctionComponent = (): ReactElement => {
    return (
        <OuterWrapper>
            <SiteTitle />
            <HamburgerMenu>
                <HamburgerMenuContent />
            </HamburgerMenu>
        </OuterWrapper>
    )
}

export default SiteHeader
