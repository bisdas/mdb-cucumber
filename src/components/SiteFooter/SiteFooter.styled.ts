import styled from 'styled-components/macro';

export const OuterWrapper = styled.div`
    padding: 10px 12px 20px;
`;
export const Content = styled.div`
    box-sizing: border-box;
    border-top: 10px solid #ebebeb;
    padding-top: 14px;
    box-sizing: border-box;
    background: #f8f8f8;
    padding: 12px;
`;

export const Section = styled.section`
    margin-bottom: 16px;
`;
export const SectionTitle = styled.div`
    user-select: none;
    outline: none;
    color: #000000;
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    font-size: 16px;
    margin-bottom: 2px;
`;

export const SectionBody = styled.div`
    outline: none;
    color: #000000;
    font-family: 'Montserrat-Regular', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    font-size: 12px;
`;

export const ContactButtonWrapper = styled.div`
    margin: 10px 0;
`;

export const SocialLink = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 14px;
    background: #ffffff;
    box-sizing: border-box;
`;
