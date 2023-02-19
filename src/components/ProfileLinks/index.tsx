import React, { type FunctionComponent, type ReactElement } from 'react'
import { OuterWrapper, Link } from './ProfileLinks.styled'
import InstagramLogo from '../../assets/images/instagram.png'
import YouTubeLogo from '../../assets/images/youtube.png'

const ProfileLinks: FunctionComponent<any> = (): ReactElement => {
    // todo: move to constants
    const instagramLink = 'https://www.instagram.com/'
    const youtubeLink = 'https://www.youtube.com/'
    const openTab = (url: string): void => {
        window.open(url, '_blank')
    }

    return (
        <OuterWrapper>
            <Link
                backgroundImage={InstagramLogo}
                width={34}
                height={34}
                onClick={() => {
                    openTab(instagramLink)
                }}
            />
            <Link
                backgroundImage={YouTubeLogo}
                width={33}
                height={33}
                onClick={() => {
                    openTab(youtubeLink)
                }}
            />
        </OuterWrapper>
    )
}

export default ProfileLinks
