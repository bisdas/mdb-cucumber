/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, type FunctionComponent } from 'react'
import { Portal } from '../Portal'
import { OuterWrapper, Trigger, MenuContentWrapper, Backdrop, MenuContent } from './HamburgerMenu.styled'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-alt.svg'

const HamburgerMenu: FunctionComponent<any> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <OuterWrapper>
            <Trigger
                onClick={(): void => {
                    setIsMenuOpen(true)
                }}
            >
                <MenuIcon height={36} width={36} />
            </Trigger>
            {isMenuOpen && (
                <Portal rootElementName="body" className="flying-menu-bar-portal">
                    <MenuContentWrapper>
                        <Backdrop
                            onClick={(): void => {
                                setIsMenuOpen(false)
                            }}
                        ></Backdrop>
                        <MenuContent>{children}</MenuContent>
                    </MenuContentWrapper>
                </Portal>
            )}
        </OuterWrapper>
    )
}

export default HamburgerMenu
