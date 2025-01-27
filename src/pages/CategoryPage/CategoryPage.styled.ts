import styled, { keyframes } from 'styled-components/macro';

const fadeIn = keyframes`
    0%   {opacity: 0}
    100% {opacity: 1}
`;

export const OuterWrapper = styled.div``;

export const Content = styled.div`
    width: 100%;
    overflow: hidden;
`;
export const PageHeader = styled.div`
    display: flex;
    flex: direction: row;
    border-bottom: 3px solid #f4f4f4;
    padding-top: 10px;
    padding-bottom: 6px;
`;

export const PageContent = styled.div`
    padding: 20px 12px;
    border-bottom: 18px solid #eaeaea;
    animation: 0.4s ${fadeIn};
`;

export const Description = styled.div``;

export const DescriptionFirstLine = styled.div`
    font-family: 'Montserrat-Bold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 24px;
    width: 100%;
    display: block;
    pointer-events: none;
    user-select: none;
`;

export const DescriptionSecondLine = styled.div`
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 14px;
    width: 100%;
    display: block;
    pointer-events: none;
    user-select: none;
`;

export const SearchBoxWrapper = styled.div`
    padding: 6px 12px;
    flex: 1;
    padding-left: 0;
`;
export const GoBackWrapper = styled.div`
    padding: 6px 12px;
    display: flex;
    align-items: center;
    padding-top: 8px;
    user-select: none;
    cursor: pointer;
`;

export const CategoryTitle = styled.div`
    font-family: 'Montserrat-Bold', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #000000;
    font-size: 16px;
    width: 100%;
    display: block;
    pointer-events: none;
    user-select: none;
    display: flex;
    align-items: center;
`;

export const ThatsAll = styled.div`
    font-family: Montserrat-Regular, 'Helvetica Neue', Helvetica, 'sans-serif';
    color: rgb(0 0 0);
    font-size: 14px;
    text-align: center;
`;

export const WeAreGrowing = styled.div`
    font-family: Montserrat-Regular, 'Helvetica Neue', Helvetica, 'sans-serif';
    color: rgb(0 0 0);
    font-size: 12px;
    text-align: center;
    margin-top: 6px;
`;

export const ProductGridWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 40px;
`;
