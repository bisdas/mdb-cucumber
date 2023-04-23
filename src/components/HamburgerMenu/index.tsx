/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useState, type FunctionComponent } from 'react'
import { Portal } from '../Portal'
import { useScrollLock } from '../../hooks/useScrollLock'
import { OuterWrapper, Trigger, MenuContentWrapper, Backdrop, MenuContent } from './HamburgerMenu.styled'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-alt.svg'

const HamburgerMenu: FunctionComponent<any> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    useScrollLock(isOpen)

    const initiateCloseMenu = (): void => {
        setIsClosing(true)
        setTimeout(() => {
            setIsOpen(false)
            setIsClosing(false)
        }, 300)
    }

    const childrenWithProps = useMemo(() => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                console.log('child', child)
                return React.cloneElement(child as React.ReactElement<any>, { onCloseMenu: initiateCloseMenu })
            }

            return child
        })
    }, [children])

    return (
        <OuterWrapper>
            <Trigger
                onClick={(): void => {
                    setIsOpen(true)
                }}
            >
                <MenuIcon height={36} width={36} />
            </Trigger>
            {isOpen && (
                <Portal rootElementName="body" className="flying-menu-bar-portal">
                    <MenuContentWrapper>
                        <Backdrop closing={isClosing} onClick={initiateCloseMenu}></Backdrop>
                        <MenuContent closing={isClosing}>{childrenWithProps}</MenuContent>
                    </MenuContentWrapper>
                </Portal>
            )}
        </OuterWrapper>
    )
}

export default HamburgerMenu
