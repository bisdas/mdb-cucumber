/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type FunctionComponent, type ReactElement, useContext } from 'react'
import { OuterWrapper, Content, PageHeader, GoBackWrapper, PageContent } from './AboutPage.styled'
import { ReactComponent as BackArrow } from '../../assets/icons/arrow-left.svg'

import { useRouter } from '../../router/useRouter'

const SearchPage: FunctionComponent<any> = (): ReactElement => {
    const { navigateBack } = useRouter()

    return (
        <OuterWrapper>
            <Content>
                <PageHeader>
                    <GoBackWrapper>
                        <BackArrow onClick={navigateBack} />
                    </GoBackWrapper>
                </PageHeader>
                <PageContent>
                    <div>Write something about cucumber</div>
                </PageContent>
            </Content>
        </OuterWrapper>
    )
}

export default SearchPage
