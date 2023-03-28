import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper } from './SiteTitle.styled'
import SiteTitleImage from '../../assets/images/site_title.png'

const SiteTitle: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <img style={{ width: '100%' }} src={SiteTitleImage} />
        </OuterWrapper>
    )
}

export default SiteTitle
