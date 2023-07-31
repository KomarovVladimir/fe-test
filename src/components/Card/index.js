import {
    ArrowButton,
    CardWrapper,
    DescriptionItem,
    Title,
    Description,
    Decoration,
    Price,
    PriceLabel,
    Promo,
} from "./styled";

import bg from "../../img/card1.png";
import dots from "../../img/dots.svg";

//TODO: Replace the background prop with some actual data
export const Card = ({
    title,
    description,
    price,
    background,
    promo,
    onClick,
}) => (
    <div className="w-full lg:w-1/5 p-1 md:p-2 snap-start">
        <CardWrapper className="flex flex-col justify-end" background={bg}>
            <Title>{title}</Title>
            <div className="flex items-center pb-[10px]">
                <Decoration src={dots} alt="Decoration" />
                <Description>
                    {description?.map((text, index) => (
                        <DescriptionItem key={index}>{text}</DescriptionItem>
                    ))}
                </Description>
            </div>
            <Promo>Save up to 15%</Promo>
            <div className="pb-[10px]">
                <PriceLabel>From</PriceLabel>
                <Price>{price}</Price>
            </div>
            <ArrowButton {...{ onClick }} />
        </CardWrapper>
    </div>
);
