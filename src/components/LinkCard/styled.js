import { styled } from "styled-components";

import decorations from "../../img/decorations.png";

export const CardWrapper = styled.div`
    color: #FFF;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
`

export const CardContent = styled.div`
    position: relative;
    background: no-repeat center url(${decorations});
    background-size: contain;
    border-radius: 12px;

    & > * {
        z-index: 100;
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: block;
        border: 1px solid rgba(255, 255, 255, 0.02);
        background: linear-gradient(207deg, #141416 0%, #2D1B16 100%);
        border-radius: 12px;
        opacity: 0.7;
        z-index: 1;
    }
`;