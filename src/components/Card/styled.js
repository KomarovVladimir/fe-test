import { styled } from "styled-components";

import arrow from "../../img/arrow.svg";
import flame from "../../img/flame.png";

export const CardWrapper = styled.div`
    position: relative;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    min-height: 360px;
    align-items: flex-start;
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
        background: linear-gradient(207deg, #141416 0%, #2d1b16 100%);
        opacity: 0.7;
        z-index: 1;
    }
`;

export const Title = styled.p`
    padding-bottom: 10px;
    color: #fff;
    font-size: 20px;
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
    color: #a98b89;
    font-size: 14px;
    line-height: 30px;
    white-space: nowrap;
`;

export const Promo = styled.div`
    display: inline-block;
    color: #000;
    font-size: 9px;
    background-color: #f09a38;
    border-radius: 4px;
    padding: 3px 9px;
    line-height: 30px;
    text-align: center;
    white-space: nowrap;
`;

export const PriceLabel = styled.div`
    margin-bottom: 3px;
    color: #a98b89;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
    line-height: normal;
`;

export const Price = styled.div`
    color: #fff;
    font-size: 16px;
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
    top: 30px;
    right: 30px;
    padding: 3px 9px;
    color: #f09a38;
    font-size: 12px;
    line-height: 30px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(7.5px);
    border-radius: 4px;

    &:before {
        content: "";
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        display: block;
        margin-right: 3px;
        background: no-repeat center url(${flame});
    }
`;
