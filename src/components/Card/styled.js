import { styled } from "styled-components";

import arrow from "../../img/arrow.svg";
import flame from "../../img/flame.png";
import dot from "../../img/dot.png";

export const CardWrapper = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
`

export const CardContent = styled.div`
    position: relative;
    background: no-repeat center url(${({ background }) => background});
    background-size: cover;
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
        background: linear-gradient(
            207deg,
            rgba(20, 20, 22, 0.68) 0%,
            rgba(45, 27, 22, 0.85) 100%
        );
        border-radius: 12px;
        opacity: 0.7;
        z-index: 1;
    }
`;

export const Title = styled.p`
    color: #fff;
    line-height: normal;
`;

export const Description = styled.ul`
    & > li:first-child {
        color: #f09a38;
    }
`;

export const Decoration = styled.img`
    margin-right: 0.5rem;
    width: 19px;
    height: 81px;
    flex-shrink: 0;
`;

export const DescriptionItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    color: #a98b89;
    white-space: nowrap;

    &:before {
        content: "";
        height: 16px;
        width: 16px;
        margin-right: 8px;
        display: inline-block;
        background: no-repeat center url(${dot});
    }
`;

export const Promo = styled.div`
    display: inline-block;
    color: #000;
    background-color: #f09a38;
    border-radius: 4px;
    padding: 3px 9px;
    line-height: 30px;
    text-align: center;
    white-space: nowrap;
`;

export const PriceLabel = styled.div`
    color: #a98b89;
    font-weight: 600;
    line-height: normal;
`;

export const Price = styled.div`
    color: #fff;
    line-height: normal;
`;

export const ArrowButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 6px;
    background: linear-gradient(207deg, #141416 0%, #2d1b16 100%);
    background-size: contain;
    box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.35);

    &:after {
        content: "";
        height: 50%;
        width: 50%;
        display: block;
        background: no-repeat center url(${arrow});
        opacity: 0.7;
        z-index: 1;
    }
`;

export const Badge = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    color: #f09a38;
    line-height: 30px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(7.5px);
    border-radius: 4px;

    &:before {
        content: "";
        flex-shrink: 0;
        display: block;
        margin-right: 3px;
        background: no-repeat center url(${flame});
        background-size: contain;
    }
`;
