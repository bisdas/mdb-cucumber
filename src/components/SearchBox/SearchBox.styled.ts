import styled from 'styled-components/macro'

interface IOuterWrapperProps {
    seamless?: boolean
}
export const OuterWrapper = styled.div<IOuterWrapperProps>`
    margin-top: 6px;
    border: ${props => (props?.seamless === false ? '2px solid #cecece' : 'none')};
    border-radius: 6px;
    height: 32px;
`

export const SearchIconWrapper = styled.div`
    margin-right: 6px;
    position: relative;
    top: 2px;
    pointer-events: none;
    user-select: none;
`

export const SearchTextBoxWrapper = styled.div`
    flex: 1;
`

export const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 32px;
    padding-left: 14px;
    padding-right: 5px;
`

export const SearchTextBox = styled.input`
    width: 100%;
    height: 24px;
    line-height: 24px;
    outline: none;
    border: none;
    font-family: 'Montserrat-Light', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 14px;

    &:hover {
        border: none;
        outline: none;
    }

    &::placeholder {
        color: #bababa;
    }
`
