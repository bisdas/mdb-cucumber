import React, { type FunctionComponent, type ReactElement } from 'react'
import SiteHeader from '../SiteHeader'
import { OuterWrapper, ContentWrapper, NotFoundMessage, NavigateHomeButton } from './RouteFallback.styled'
import { useRouter } from '../../router/useRouter'

const RouteFallback: FunctionComponent<any> = (): ReactElement => {
    const { navigateHome } = useRouter()
    return (
        <OuterWrapper>
            <SiteHeader />
            <ContentWrapper>
                <NotFoundMessage>This page wasn&apos;t found!</NotFoundMessage>
                <NavigateHomeButton onClick={navigateHome}>Go Home</NavigateHomeButton>
            </ContentWrapper>
        </OuterWrapper>
    )
}

export default RouteFallback
