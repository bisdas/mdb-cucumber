import styled from 'styled-components/macro'

export type ButtonAppearance = 'contained' | 'outlined' | 'textonly'

const backgroundColorDefault = 'unset'
const backgroundColorContained = '#0b9d58'
const outlineColor = '#0b9d58'
const textColorDefault = '#000000'
const textColorContained = '#ffffff'

interface IOuterWrapperProps {
    appearance: ButtonAppearance
}
export const OuterWrapper = styled.div<IOuterWrapperProps>`
    font-family: Montserrat-Bold, 'Helvetica Neue', Helvetica, 'sans-serif';
    font-size: 14px;
    padding: 10px 16px;
    cursor: pointer;
    display: inline-block;
    user-select: none;
    outline: none;
    background: ${(props) => (props.appearance === 'contained' ? backgroundColorContained : backgroundColorDefault)};
    border-style: ${(props) => (props.appearance === 'outlined' ? `solid` : 'none')};
    border-width: 2px;
    border-color: ${outlineColor};
    border-radius: 3px;
    box-sizing: border-box;
`

interface ITextProps {
    appearance: ButtonAppearance
}

export const Text = styled.div<ITextProps>`
    color: ${(props) => (props.appearance === 'contained' ? textColorContained : textColorDefault)};
`
