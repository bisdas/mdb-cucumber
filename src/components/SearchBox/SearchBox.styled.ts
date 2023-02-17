import styled from 'styled-components/macro'

export const OuterWrapper = styled.div`
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    border: 2px solid #cecece;
    border-radius: 8px;
    height: 36px;
    padding-left: 14px;
    padding-right: 20px;
    align-items: center;
`
export const SearchIconWrapper = styled.div`
    margin-right: 10px;
    position: relative;
    top: 2px;
`

export const SearchTextBoxWrapper = styled.div`
    flex: 1;
`

export const SearchTextBox = styled.input`
    width: 100%;
    height: 24px;
    line-height: 24px;
    outline: none;
    border: none;
    font-family: 'Montserrat-Light', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 18px;

    &:hover {
        border: none;
        outline: none;
    }
`
