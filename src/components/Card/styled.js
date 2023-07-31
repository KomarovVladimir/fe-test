import { styled } from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    padding: 30px;
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
    > li:first-child: {
        color: #f09a38;
    }
`;

export const DescriptionItem = styled.li`
    color: #a98b89;
    fontsize: 14px;
    line-height: 30px;
    whitespace: nowrap;
`;

export const Promo = styled.div`
    display: inline-block;
    margin-bottom: 10px;
    background-color: #f09a38;
    border-radius: 4px;
    padding: 3px 9px;
    line-height: 30px;
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
