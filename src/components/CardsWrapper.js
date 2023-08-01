import { styled } from "styled-components";

export const CardsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    margin: -6px;
    scroll-snap-type: x var(--tw-scroll-snap-strictness);
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-mask: linear-gradient(to left, transparent 25%, red 45%);
    mask: linear-gradient(to bottom, transparent 25%, black 45%);
    &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1700px) {
        flex-wrap: wrap;
        -webkit-mask: none;
        mask: none;
    }
`;
