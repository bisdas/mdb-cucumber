import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, Link } from './ProfileLinks.styled'
import InstagramLogo from '../../assets/images/instagram.png'
import YouTubeLogo from '../../assets/images/youtube.png'

const ProfileLinks: FunctionComponent<any> = (): ReactElement => {
    return (
        <OuterWrapper>
            <Link backgroundImage={InstagramLogo} width={34} height={34} />
            <Link backgroundImage={YouTubeLogo} width={33} height={33} />
        </OuterWrapper>
    )
}

export default ProfileLinks
