import styled from 'styled-components/macro'

export const OuterWrapper = styled.div``
export const Content = styled.div``
export const HyperlinkContent = styled.a`
    text-decoration: none;
`
export const ImageWrapper = styled.div`
    min-width: 100px;
    border-radius: 10px;
    padding: 50%;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #f2f2f2;
`

interface ImageContentProps {
    imageUrl: string
}
export const ImageContent = styled.div<ImageContentProps>`
    width: 94%;
    height: 94%;
    margin: 3%;
    border-radius: 7px;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
`

export const TitleWrapper = styled.div`
    padding: 6px 4px;
    box-sizing: border-box;
    white-space: break-spaces;
`
export const TitleText = styled.span`
    font-family: 'Montserrat-Regular', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 11px;
    width: 100%;
    display: block;
}`
