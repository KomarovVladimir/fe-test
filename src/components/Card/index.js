import {
    ArrowButton,
    Badge,
    CardContent,
    CardWrapper,
    DescriptionItem,
    Description,
    Price,
    PriceLabel,
    Promo,
    Title,
} from "./styled";

//Replace tailwind media queries with styled components. Add theme for custom breakpoints
export const Card = ({
    title,
    description,
    price,
    background,
    topSeller,
    onClick,
}) => (
    <CardWrapper className="w-full 2xl:w-1/5 p-[6px] md:p-2 snap-start text-[9px] md:text-[10px] 2xl:text-[14px]">
        <CardContent
            className="
                flex
                flex-col
                items-start
                justify-end
                min-h-[249px]
                min-w-[274px]
                px-[10px]
                py-[20px]
                md:min-h-[316px]
                md:min-w-[300px] 
                md:px-[15px]
                md:py-[30px]
                2xl:p-[30px]
                2xl:min-h-[360px]
                2xl:min-w-full"
            {...{ background }}
        >
            {topSeller && (
                <Badge
                    className="
                top-2
                right-2
                px-2
                py-0
                leading-3
                md:pr-4
                md:pl-2
                md:top-[15px]
                md:right-[15px]
                md:before:h-[20px]
                md:before:w-[20px]
                before:h-3 
                before:w-3
                2xl:top-[30px]
                2xl:right-[30px]
                2xl:text-[12px]"
                >
                    Top offers !
                </Badge>
            )}
            <Title className="max-w-[190px] text-[13px] mb-2 md:text-[20px] md:mb-[10px]">
                {title}
            </Title>
            <div className="flex items-center mb-[10px] md:mb-[7px] 2xl:mb-[10px]">
                <Description>
                    {description?.map((text, index) => (
                        <DescriptionItem
                            key={index}
                            className="leading-[25px] md:leading-[28px]"
                        >
                            {text}
                        </DescriptionItem>
                    ))}
                </Description>
            </div>
            <Promo className="w-full mb-[10px] md:w-auto md:mb-[13px] md:text-[12px] 2xl:mb-0">
                Save up to 15%
            </Promo>
            <div className="flex items-center justify-between w-full md:items-end">
                <div className="flex flex-row  items-center 2xl:flex-col 2xl:items-start">
                    <PriceLabel className="mr-[10px] mb:mr-0">From</PriceLabel>
                    <Price className="text-[14px] 2xl:text-[16px]">
                        {price}
                    </Price>
                </div>
                <ArrowButton
                    className="w-7 h-7 md:w-[35px] md:h-[35px] 2xl:w-[48px] 2xl:h-[48px]"
                    {...{ onClick }}
                />
            </div>
        </CardContent>
    </CardWrapper>
);
