import styled from 'styled-components/macro'

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const HeadSection = styled.div`
    padding: 14px;
    background: #f2f2f2;
`

export const MenuItemsSection = styled.div`
    padding: 0 14px;
    margin-top: 10px;
`
export const CommunityInviteSection = styled.div`
    padding: 0 14px;
    flex: 1;
    background: #f2f2f2;
`

export const MenuItem = styled.div`
    margin-bottom: 10px;
    margin-top: 12px;
    display: flex;
`

interface IMenuItemIcon {
    adjustTopPosition: number
}
export const MenuItemIcon = styled.span<IMenuItemIcon>`
    position: relative;
    top: ${(props) => props.adjustTopPosition}px;
`
export const MenuNavigateIcon = styled.span<IMenuItemIcon>`
    position: relative;
    top: ${(props) => props.adjustTopPosition}px;
`

interface IMenuItemTitle {
    border: boolean
}
export const MenuItemTitle = styled.span<IMenuItemTitle>`
    font-family: 'Montserrat-Regular', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 14px;
    margin-left: 6px;
    flex: 1;
    border-bottom: ${(props) => (props.border ? '1px solid #f2f2f2' : 'none')};
    padding-bottom: 14px;
`

export const MenuHead = styled.div``

export const SocialLinkButtons = styled.div`
    margin-top: 6px;
`

export const SocialLink = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #e4e4e4;
    background: #ffffff;
    box-sizing: border-box;
`

export const CommunityInvite = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
`
export const TheCommunity = styled.div`
    font-family: 'Montserrat-Black', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    font-size: 14px;
`
