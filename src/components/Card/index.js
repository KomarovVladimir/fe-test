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

//TODO: Replace the background prop with some actual data
export const Card = ({
    title,
    description,
    price,
    background,
    promo,
    onClick,
}) => (
    <div className="w-full min-w-[274px] lg:w-1/5 p-1 md:p-2 snap-start text-[9px]">
        <CardWrapper
            className="flex flex-col justify-end px-[10px] pt-[34px] pb-[15px] md:px-[14px] md:py-[30px]"
            background={bg}
        >
            <Badge className="top-2 right-2 px-4 py-0 leading-3 before:h-3 before:w-3">
                Top offers !
            </Badge>
            <Title className="text-[13px] mb-2">{title}</Title>
            <div className="flex items-center pb-[10px]">
                <Description>
                    {description?.map((text, index) => (
                        <DescriptionItem key={index}>{text}</DescriptionItem>
                    ))}
                </Description>
            </div>
            <Promo className="w-full md:w-auto mb-[10px] md:mb-4">
                Save up to 15%
            </Promo>
            <div className="flex items-center justify-between w-full md:items-end md:mb-[10px]">
                <div className="flex flex-row md:flex-col items-center md:items-start">
                    <PriceLabel className="mr-[10px] mb:mr-0">From</PriceLabel>
                    <Price className="text-[14px]">{price}</Price>
                </div>
                <ArrowButton
                    className="w-7 h-7 md:w-12 md:h-12"
                    {...{ onClick }}
                />
            </div>
        </CardWrapper>
    </div>
);
