import styled from 'styled-components/macro'

export const OuterWrapper = styled.div``

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
export const MenuItemTitle = styled.span`
    font-family: 'Montserrat-Regular', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 14px;
    margin-left: 6px;
    flex: 1;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 14px;
`

export const MenuHeadSection = styled.div`
    padding: 14px;
    background: #f2f2f2;
`

export const MenuSection = styled.div`
    margin-top: 16px;
    padding: 0 14px;
    margin-top: 16px;
`

export const MenuHead = styled.div``
export const Title = styled.div`
    font-family: 'Montserrat-ExtraBold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #009a4f;
    font-size: 24px;
`
export const SubtitleOne = styled.div`
    font-family: 'Montserrat-Bold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 16px;
`
export const SubtitleTwo = styled.div`
    font-family: 'Montserrat-Bold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 16px;
`
export const ByDelishBowl = styled.div``
export const By = styled.span`
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 10px;
    margin-right: 3px;
`
export const DelishBowl = styled.span`
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 10px;
`

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