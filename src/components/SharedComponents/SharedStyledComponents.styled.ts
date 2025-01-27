import styled from 'styled-components/macro';

export const ScrollableLayout = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    /* hide scrollbar but allow scrolling */
    & {
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        overflow-y: scroll;
    }

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`;

export const LoaderWrapper = styled.div`
    padding: 6px 18px;
    font-family: 'Montserrat-Medium', 'Helvetica Neue', 'Helvetica', 'sans-serif';
    color: #2b2b2b;
    font-size: 14px;
`;
