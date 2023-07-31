import {
    ArrowButton,
    Badge,
    CardWrapper,
    DescriptionItem,
    Description,
    Decoration,
    Price,
    PriceLabel,
    Promo,
    Title,
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
        <CardWrapper
            className="flex flex-col justify-end px-[10px] py-[15px] md:px-[14px] md:py-[30px]"
            background={bg}
        >
            <Badge>Top offers !</Badge>
            <Title>{title}</Title>
            <div className="flex items-center pb-[10px]">
                <Decoration src={dots} alt="Decoration" />
                <Description>
                    {description?.map((text, index) => (
                        <DescriptionItem key={index}>{text}</DescriptionItem>
                    ))}
                </Description>
            </div>
            <Promo className="w-full md:w-auto mb-4 md:mb-4">
                Save up to 15%
            </Promo>
            <div className="flex items-center justify-between w-full md:items-end md:mb-[10px]">
                <div className="flex flex-row  md:flex-col items-center md:items-start">
                    <PriceLabel className="mr-[10px] mb:mr-0">From</PriceLabel>
                    <Price>{price}</Price>
                </div>
                <ArrowButton
                    className="w-7 h-7 md:w-12 md:h-12"
                    {...{ onClick }}
                />
            </div>
        </CardWrapper>
    </div>
);
