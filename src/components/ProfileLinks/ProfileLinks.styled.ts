import styled from 'styled-components/macro'

export const OuterWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
`

interface LinkProps {
    backgroundImage: any
    width: number
    height: number
}
export const Link = styled.div<LinkProps>`
    background-image: url(${(props) => props.backgroundImage});
    height: ${(props) => props.width}px;
    width: ${(props) => props.height}px;
    background-position: center;
    background-size: cover;
    margin-left: 12px;
    cursor: pointer;
`
