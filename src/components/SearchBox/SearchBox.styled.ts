import styled from 'styled-components/macro'

interface IOuterWrapperProps {
    seamless?: boolean
}
export const OuterWrapper = styled.div<IOuterWrapperProps>`
    margin-top: 6px;
    border: ${(props) => (props?.seamless === false ? '3px solid #d8d8d8' : 'none')};
    border-radius: 24px;
    height: 40px;
`

export const SearchIconWrapper = styled.div`
    margin-right: 6px;
    position: relative;
    top: 3px;
    pointer-events: none;
    user-select: none;
`

export const SearchTextBoxWrapper = styled.div`
    flex: 1;
`

interface ISearchFormProps {
    seamless: boolean
}
export const SearchForm = styled.form<ISearchFormProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: inherit;
    padding-left: ${(props) => (props.seamless ? '0' : '14px')};
    padding-right: 14px;
`

export const SearchTextBox = styled.input`
    width: 100%;
    height: 28px;
    line-height: 28px;
    outline: none;
    border: none;
    font-family: 'Montserrat-Light', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 16px;
    background: transparent;

    &:hover {
        border: none;
        outline: none;
    }

    &::placeholder {
        color: #bababa;
    }
`
