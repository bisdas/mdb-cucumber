import React, { type FunctionComponent, type ReactElement } from 'react'
import { Button } from '../flexible'
import SiteHeader from '../SiteHeader'
import { OuterWrapper, ContentWrapper, NotFoundMessage } from './RouteFallback.styled'
import { useRouter } from '../../router/useRouter'

const RouteFallback: FunctionComponent<any> = (): ReactElement => {
    const { navigateHome } = useRouter()
    return (
        <OuterWrapper>
            <SiteHeader />
            <ContentWrapper>
                <NotFoundMessage>This page wasn&apos;t found!</NotFoundMessage>
                <Button appearance="outlined" onClick={navigateHome}>
                    Go Home
                </Button>
            </ContentWrapper>
        </OuterWrapper>
    )
}

export default RouteFallback
