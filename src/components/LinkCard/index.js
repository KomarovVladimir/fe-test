import {
    CardContent,
    CardWrapper,
} from "./styled";

import offer from "../../img/offer.svg";

export const LinkCard = () => (
    <CardWrapper className="w-full 2xl:w-1/5 p-[6px] md:p-2 snap-start text-[9px] md:text-[10px] 2xl:text-[14px]">
        <CardContent
            className="
                flex
                flex-col
                items-center
                justify-center
                min-h-[229px]
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
        >
            <img src={offer} alt="Custom offer" className="-mt-8 w-[188px] h-[188px]" />
            <p className="-mt-8">Custom Offers</p>
        </CardContent>
    </CardWrapper>
);
