import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, TitleDesign } from './SiteTitle.styled'
import SiteTitleImage from '../../assets/images/site_title_02.png'

const SiteTitle: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <TitleDesign>
                <img style={{ width: '100%' }} src={SiteTitleImage} />
            </TitleDesign>
        </OuterWrapper>
    )
}

export default SiteTitle
