import styled from 'styled-components/macro'

export const ScrollableLayout = styled.div`
    padding: 0 12px;
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
`
