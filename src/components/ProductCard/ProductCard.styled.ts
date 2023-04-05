import styled from 'styled-components/macro'

export const OuterWrapper = styled.div``
export const ImageWrapper = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 10px;
    background: linear-gradient(
        0deg,
        rgb(238 249 255) 0%,
        rgba(255, 255, 255, 0.03687412464985995) 1%,
        rgb(255 255 255) 100%
    );

    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #f2f2f2;
`

interface ImageContentProps {
    imageUrl: string
}
export const ImageContent = styled.div<ImageContentProps>`
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 30px;
    color: #ededed;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
`

export const TitleWrapper = styled.div`
    padding: 6px 4px;
    width: 100px;
    box-sizing: border-box;
    white-space: break-spaces;
`
export const TitleText = styled.span`
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 12px;
    width: 100%;
    display: block;
}`

export const Anchor = styled.a`
    text-decoration: none;
    color: #000000;

    &:visited {
        color: #000000;
    }
`
